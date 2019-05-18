/*
 *      Copyright (c) 2016 Samsung Electronics Co., Ltd
 *
 *      Licensed under the Flora License, Version 1.1 (the "License");
 *      you may not use this file except in compliance with the License.
 *      You may obtain a copy of the License at
 *
 *              http://floralicense.org/license/
 *
 *      Unless required by applicable law or agreed to in writing, software
 *      distributed under the License is distributed on an "AS IS" BASIS,
 *      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *      See the License for the specific language governing permissions and
 *      limitations under the License.
 */

/*global pageController workouts*/

var day;

if (tizen.preference.exists('currentDay')) {
	day = tizen.preference.getValue('currentDay');
} else {
	day = 0;
}

var currentPhase = 0;
var currentTime = 0;

var countdown = 0;
var shouldVibrateCountdown = false;

(function() {
	var ROTATE_DATA_PROGRESS = {
			"START": {
				"transform": "rotate(-125deg)"
			},
			"END": {
				"transform": "rotate(125deg)"
			}
	},
	setting = {
			timeSet: 90,
			timeRemain: 0
	},
	animTimePrevFrame,
	animRequest;

	/**
	 * Removes all child of the element.
	 * @private
	 * @param {Object} elm - The object to be emptied
	 * @return {Object} The emptied element
	 */
	function emptyElement(elm) {
		while (elm.firstChild) {
			elm.removeChild(elm.firstChild);
		}

		return elm;
	}

	/**
	 * Sets the text data to the element.
	 * @private
	 * @param {Object} elm - An element to be changed.
	 * @param {string} data - A text string to set.
	 */
	function setText(elm, data) {
		emptyElement(elm);
		elm.appendChild(document.createTextNode(data));
	}

	
	/**
	 * Handles the hardware key event.
	 * @private
	 * @param {Object} event - The hardware key event object
	 */
	function keyEventHandler(event) {
		if (event.keyName === "back") {
			if (pageController.isPageMain()) {
				// Terminate the application if the current page is the main page.
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {}
			} else {
				// TODO: Try to figure out if we can tell if we're on the timer page. So we can actually have more than 2 pages.
				shouldVibrateCountdown = true;
				countdown = 15;
			}
		}
	}

	/**
	 * Sets the style of element with the calculated style value from dataArray, by origPos, destPos, ratio.
	 * Generally used for applying animation effect.
	 * @private
	 * @param {Object} elm - An object to be applied the calculated style value
	 * @param {Object} dataArray- An array of style data
	 * @param {string} origPos- Original position of transition
	 * @param {string} destPos- Destination position of transition
	 * @param {number} ratio - Progress ratio of transition
	 */
	function applyStyleTransition(elm, dataArray, origPos, destPos, ratio) {
		var valOrigStyle,
		valDestStyle,
		valAnimStyle;

		if (ratio > 1) {
			ratio = 1;
		}

		// Calculate the style value of the element for the moment.
		Object.keys(dataArray[origPos]).forEach(function(key) {
			switch (key) {
			case "transform":
				// Remove the "rotate(" string, then parse float value.
				// After parsing, calculate the result value and recover the prefix "rotate(" and suffix "deg)".
				valOrigStyle = parseFloat(dataArray[origPos][key].substring(7));
				valDestStyle = parseFloat(dataArray[destPos][key].substring(7));
				valAnimStyle = "rotate(" + (valOrigStyle + (valDestStyle - valOrigStyle) * ratio) + "deg)";
				break;
			default:
				break;
			}

			elm.style[key] = valAnimStyle;
		});
	}

	/**
	 * Makes a snapshot of main screen animation frame,
	 * by setting style to elements by the current time.
	 * @private
	 * @param {number} timestamp - DOMHighResTimeStamp value passed by requestAnimationFrame.
	 */
	function drawRunAnimationFrame(timestamp) {
		var elmDotProg = document.querySelector("#dot-progress");

		// Check timestamp of the last frame of animation.
		if (!animTimePrevFrame) {
			animTimePrevFrame = timestamp;
		}
		// TimeElapsed is sum of progress from each calls.
		setting.timeRemain -= (timestamp - animTimePrevFrame) / 1000;

		const percentComplete = (1-(setting.timeRemain / setting.timeSet)) * 100
		document.querySelector("#run-progress").style.width = percentComplete + "%";

		const timeRemaining = Math.floor(setting.timeRemain);

		var shouldContinue = true;

		if (currentTime !== timeRemaining){
			shouldContinue = processTick(timeRemaining);
		}
		currentTime = timeRemaining;

		if (shouldContinue) {
			animTimePrevFrame = timestamp;
			animRequest = window.requestAnimationFrame(drawRunAnimationFrame);
		}
	}

	/**
	 * 
	 * @param remainingSecs
	 * @returns boolean - true if the timer should continue on the current phase, false if it should move onto the next phase (or end if final phase)
	 */
	function processTick(remainingSecs) {
		// TODO: refactor this into a few functions.
		const phase = workouts[day].phases[currentPhase];
		
		if (remainingSecs <= 4 && phase.vibrate.lastFiveSecs) {
			vibrate(100);
		} else if (shouldVibrateCountdown) {
			if (countdown > 0) {
				countdown--;
				vibrate(100);
			} else {
				vibrate([100,100,100,100,100]); //quick triple vibrate
				shouldVibrateCountdown = false;
			}
		}
		
		updateClock();

		if (remainingSecs >= 0) {
			updateTimer(remainingSecs);
			return true;
		} else {
			processEndOfPhase();
			return false;
		}	
	}
	
	function updateClock() {
		var date = new Date();
		var time = formatTime([date.getHours(), date.getMinutes()]);
		setText(document.querySelector("#text-time"), time);
	}
	
	function updateTimer(remainingSecs) {
		// Display an additional second (Show 00:01 for the final second rather than 00:00)
		var displayTime = Math.min(remainingSecs + 1, setting.timeSet);

		const mins = Math.floor(displayTime / 60);
		const secs = Math.floor(displayTime) % 60;

		setText(document.querySelector("#text-run-minute"),
				addLeadingZero(mins, 2));
		setText(document.querySelector("#text-run-second"),
				addLeadingZero(secs, 2));
	}

	function processEndOfPhase() {
		vibrate(500);
		startNextPhase();
	}

	function restartCurrentPhase() {
		stopRunAnimation();
		startPhase(currentPhase);
	}

	function startNextPhase() {
		shouldVibrateCountdown = false;
		stopRunAnimation();
		if (currentPhase + 1 < workouts[day].phases.length) {
			startPhase(currentPhase +1);
		} else {
			endWorkout();
		}
	}

	function startPhase(phaseNumber) {
		currentPhase = phaseNumber;

		var currentDay = workouts[day];
		var phases = currentDay.phases;
		var phase = phases[phaseNumber];

		setText(document.querySelector('#text-phase'),
				phase.label);

		setText(document.querySelector('#text-phase-number'),
				(phaseNumber + 1) + ' of ' + phases.length);

		setting.timeSet = phase.time;
		setting.timeRemain = phase.time;
		animRequest = window.requestAnimationFrame(drawRunAnimationFrame);
	}
	
	function endWorkout() {
		setText(document.querySelector("#text-complete-week"),
				workouts[day].week);
		setText(document.querySelector("#text-complete-day"),
				workouts[day].day);
		pageController.movePage("page-complete");
		tizen.power.release("SCREEN");
	}


	/**
	 * Stops the animation and clear the related variables.
	 * @private
	 */
	function stopRunAnimation() {	
		window.cancelAnimationFrame(animRequest);
		animTimePrevFrame = 0;
		animRequest = 0;
	}

	/**
	 * Handles the rotary event.
	 * (The list will be scrolled by result)
	 * @private
	 * @param {Object} event - the event data object
	 */
	function rotaryEventHandler(event) {
		var direction = event.detail.direction;

		if (pageController.isPageMain() === true) {
			if (direction === "CW") {
				incrementDay();
			} else if (direction === "CCW") {
				decrementDay();
			}
		}
	}

	function incrementDay() {
		if (day + 1 < workouts.length) {
			setDay(day + 1);
			reloadMenuScreen();
		}
	}

	function decrementDay() {
		if (day - 1 >= 0) {
			setDay(day - 1);
			reloadMenuScreen();
		}
	}

	function setDay(dayNumber) {
		day = dayNumber;
		tizen.preference.setValue('currentDay', dayNumber);
	}

	function reloadMenuScreen(){
		var workout = workouts[day];

		var totalTimeSecs = 0;

		for (const phase of workout.phases) {
			totalTimeSecs += phase.time;
		}

		const mins =  Math.floor(totalTimeSecs / 60);
		const secs = totalTimeSecs % 60;

		setText(document.querySelector("#text-workout-pos"),
				"Day " + (day + 1) + " of " + workouts.length);

		setText(document.querySelector("#text-week-number"),
				workout.week);
		setText(document.querySelector("#text-day-number"),
				workout.day);
		setText(document.querySelector("#text-day-desc"),
				workout.description);

		setText(document.querySelector("#text-total-time"),
				workout.phases.length + " phases - " + formatTime([mins, secs]));
	}

	function pauseOrResumeTimer(){ 
		var btnPause = document.querySelector("#btn-stop");
		if (animRequest) {
			tizen.power.release("SCREEN");
			stopRunAnimation();
			btnPause.style.backgroundImage = "url('./image/button_continue.png')";
		} else {
			tizen.power.request("SCREEN", "SCREEN_DIM");
			animRequest = window.requestAnimationFrame(drawRunAnimationFrame);
			btnPause.style.backgroundImage = "url('./image/button_pause.png')";
		}
	}

	/**
	 * Sets default event listeners.
	 * @private
	 */
	function setDefaultEvents() {
		var btnStart = document.querySelector("#btn-start"),
		btnPause = document.querySelector("#btn-stop"),
		btnSettime = document.querySelector("#btn-settime"),
		btnReset = document.querySelector("#btn-reset"),
		btnSkip = document.querySelector("#btn-skip"),
		btnHome = document.querySelector("#btn-home");

		// Add hardware key event listener
		window.addEventListener("tizenhwkey", keyEventHandler);
		document.addEventListener("rotarydetent", rotaryEventHandler);

		btnStart.addEventListener("click", function() {
			tizen.power.request("SCREEN", "SCREEN_DIM");
			pageController.movePage("page-run");
			btnPause.style.backgroundImage = "url('./image/button_pause.png')";
			startPhase(0);
		});
		btnPause.addEventListener("click", function() {
			pauseOrResumeTimer();
		});
		btnSettime.addEventListener("click", function() {
			tizen.power.release("SCREEN");
			stopRunAnimation();
			pageController.moveBackPage();
		});
		btnReset.addEventListener("click", function() {
			btnPause.style.backgroundImage = "url('./image/button_pause.png')";
			restartCurrentPhase();
		});
		btnSkip.addEventListener("click", function() {
			btnPause.style.backgroundImage = "url('./image/button_pause.png')";
			processEndOfPhase();
		});
		btnHome.addEventListener("click", function() {
			incrementDay();
			pageController.movePage("page-main");
		});
	}

	/**
	 * Initializes the application.
	 * @private
	 */
	function init() {
		setDefaultEvents();
		reloadMenuScreen();

		// Add both pages to the page controller
		pageController.addPage("page-main");
		pageController.addPage("page-run");
		pageController.addPage("page-complete");
	}

	window.onload = init;
}());
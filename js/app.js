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

var bar = new window.ProgressBar.Circle("#run-progress-circle", {
  strokeWidth: 1,
  easing: 'linear',
  duration: 100,
  color: '#00FF00',
  trailColor: '#000',
  trailWidth: 0,
  svgStyle: null
});

function getCurrentWorkout() {
	return workouts[day];
}

function getCurrentWorkoutPhase() {
	return getCurrentWorkout().phases[currentPhase];
}

(function() {
	var setting = {
			timeSet: 90,
			timeRemain: 0
	},
	animTimePrevFrame,
	animRequest;
	
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
				pauseOrResumeTimer();
			}
		}
	}

	/**
	 * Makes a snapshot of main screen animation frame,
	 * by setting style to elements by the current time.
	 * @private
	 * @param {number} timestamp - DOMHighResTimeStamp value passed by requestAnimationFrame.
	 */
	function drawRunAnimationFrame(timestamp) {
		// Check timestamp of the last frame of animation.
		if (!animTimePrevFrame) {
			animTimePrevFrame = timestamp;
		}
		// TimeElapsed is sum of progress from each calls.
		setting.timeRemain -= (timestamp - animTimePrevFrame) / 1000;

		const progressBarPos = (1-(setting.timeRemain / setting.timeSet))
		bar.animate(progressBarPos);

		const timeRemaining = Math.floor(setting.timeRemain);

		var shouldContinue = true;

		if (currentTime !== timeRemaining){
			shouldContinue = processTick(timeRemaining);
		}
		currentTime = timeRemaining;

		if (shouldContinue) {
			animTimePrevFrame = timestamp;
			startRunAnimation();
		}
	}

	/**
	 * 
	 * @param remainingSecs
	 * @returns boolean - true if the timer should continue on the current phase, false if it should move onto the next phase (or end if final phase)
	 */
	function processTick(remainingSecs) {
		// TODO: refactor this into a few functions.
		const phase = getCurrentWorkoutPhase();
		
		if (remainingSecs <= 4 && phase.vibrate.lastFiveSecs) {
			vibrate(100);
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

		const time = secondsToMinsSecs(displayTime);

		setText(document.querySelector("#text-run-minute"),
				addLeadingZero(time.mins, 2));
		setText(document.querySelector("#text-run-second"),
				addLeadingZero(time.secs, 2));
	}

	function processEndOfPhase() {
		vibrate(500);
		startNextPhase();
	}

	function restartCurrentPhase() {
		stopRunAnimation();
		if (setting.timeRemain > setting.timeSet - 5 && currentPhase > 0) {
			startPhase(currentPhase - 1);
		} else {
			startPhase(currentPhase);
		}
	}

	function startNextPhase() {
		stopRunAnimation();
		if (currentPhase + 1 < getCurrentWorkout().phases.length) {
			startPhase(currentPhase +1);
		} else {
			endWorkout();
		}
	}

	function startPhase(phaseNumber) {
		currentPhase = phaseNumber;
		var phases = getCurrentWorkout().phases;
		var phase = phases[phaseNumber];

		setText(document.querySelector('#text-phase'),
				phase.label);

		setText(document.querySelector('#text-phase-number'),
				(phaseNumber + 1) + ' / ' + phases.length);

		setting.timeSet = phase.time;
		setting.timeRemain = phase.time;
		startRunAnimation();
	}
	
	function endWorkout() {
		var workout = getCurrentWorkout();
		setText(document.querySelector("#text-complete-week"),
				workout.week);
		setText(document.querySelector("#text-complete-day"),
				workout.day);
		setHtmlContent(document.querySelector("#box-complete-content"),
				workout.complete);
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
	 * Starts the animation
	 */
	function startRunAnimation() {
		animRequest = window.requestAnimationFrame(drawRunAnimationFrame);
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
		var workout = getCurrentWorkout();

		var totalTimeSecs = 0;

		for (const phase of workout.phases) {
			totalTimeSecs += phase.time;
		}
		
		const time = secondsToMinsSecs(totalTimeSecs);

		setText(document.querySelector("#text-workout-pos"),
				"Day " + (day + 1) + " of " + workouts.length);

		setText(document.querySelector("#text-week-number"),
				workout.week);
		setText(document.querySelector("#text-day-number"),
				workout.day);
		setText(document.querySelector("#text-day-desc"),
				workout.description);

		setText(document.querySelector("#text-total-time"),
				workout.phases.length + " phases - " + formatTime([time.mins, time.secs]));
	}

	function pauseOrResumeTimer(){
		if (timerIsRunning()) {
			pauseTimer();
		} else {
			resumeTimer();
		}
	}
	
	function pauseTimer() {
		tizen.power.release("SCREEN");
		stopRunAnimation();
		populatePausePage();
		pageController.movePage("page-pause");
	}
	
	function resumeTimer() {
		tizen.power.request("SCREEN", "SCREEN_NORMAL");
		pageController.movePage("page-run");
		startRunAnimation();
	}
	
	function populatePausePage() {
		// Time - Minute
		copyElementText(document.querySelector("#text-run-minute"),
				document.querySelector("#text-pause-minute"));
		// Time - Second
		copyElementText(document.querySelector("#text-run-second"),
				document.querySelector("#text-pause-second"));
		
		// Phase - Text
		copyElementText(document.querySelector("#text-phase"),
				document.querySelector("#text-pause-phase"));
		// Phase - Number
		copyElementText(document.querySelector("#text-phase-number"),
				document.querySelector("#text-pause-phase-number"));
	}
	
	function copyElementText(source, dest) {
		setText(dest, source.innerText);
	}
	
	function timerIsRunning() {
		return !!animRequest;
	}

	/**
	 * Sets default event listeners.
	 * @private
	 */
	function setDefaultEvents() {
		var btnStart = document.querySelector("#btn-start"),
		btnPause = document.querySelector("#btn-stop"),
		btnContinue = document.querySelector("#btn-continue"),
		btnCancel = document.querySelector("#btn-cancel"),
		btnReset = document.querySelector("#btn-reset"),
		btnSkip = document.querySelector("#btn-skip"),
		btnHome = document.querySelector("#btn-home");

		// Add hardware key event listener
		window.addEventListener("tizenhwkey", keyEventHandler);
		document.addEventListener("rotarydetent", rotaryEventHandler);

		btnStart.addEventListener("click", function() {
			tizen.power.request("SCREEN", "SCREEN_NORMAL");
			pageController.movePage("page-run");
			btnPause.style.backgroundImage = "url('./image/button_pause.png')";
			startPhase(0);
		});
		btnPause.addEventListener("click", function() {
			pauseTimer();
		});
		btnContinue.addEventListener("click", function() {
			resumeTimer();
		});
		btnCancel.addEventListener("click", function() {
			pageController.movePage("page-main");
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

	function pageBeforeShowHandler() {
		progressBarWidget = new tau.widget.CircleProgressBar(progressBar, {size: 'full'});
	}
	
	/**
	 * Initializes the application.
	 * @private
	 */
	function init() {
		setDefaultEvents();
		reloadMenuScreen();
		
		document.getElementById('page-run').addEventListener('pagebeforeshow', pageBeforeShowHandler);

		// Add pages to the page controller
		pageController.addPage("page-main");
		pageController.addPage("page-run");
		pageController.addPage("page-pause");
		pageController.addPage("page-complete");
	}

	window.onload = init;
}());
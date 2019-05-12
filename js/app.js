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

console.log('Starting');

var day;

if (tizen.preference.exists('currentDay')) {
	day = tizen.preference.getValue('currentDay');
} else {
	day = 0;
}

var currentPhase = 0;
var currentTime = 0;

(function() {
    var ROTATE_DATA_HAND = {
            "START": {
                "transform": "rotate(0deg)"
            },
            "END": {
                "transform": "rotate(360deg)"
            }
        },
        ROTATE_DATA_PROGRESS = {
            "START": {
                "transform": "rotate(-125deg)"
            },
            "END": {
                "transform": "rotate(125deg)"
            }
        },
        setting = {
            selectedType: "hour", // The selected type of time (hour/minute/second/none)
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
     * Adds leading zero(s) to a number and make a string of fixed length.
     * @private
     * @param {number} number - A number to make a string.
     * @param {number} digit - The length of the result string.
     * @return {string} The result string
     */
    function addLeadingZero(number, digit) {
        var n = number.toString(),
            i,
            strZero = "";

        for (i = 0; i < digit - n.length; i++) {
            strZero += "0";
        }

        return strZero + n;
    }
    /**
     * Handles the hardware key event.
     * @private
     * @param {Object} event - The hardware key event object
     */
    function keyEventHandler(event) {
        if (event.keyName === "back") {
            if (pageController.isPageMain() === true) {
                // Terminate the application if the current page is the main page.
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {}
            } else {
                // Go to the last page if the current page is not the main page.
                stopRunAnimation();
                pageController.moveBackPage();
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
        	
        	const timeRemaining = Math.floor(setting.timeRemain);
        	
        	const phase = workouts[day].phases[currentPhase];
        	
        	if (currentTime !== timeRemaining &&
        		timeRemaining <= 4 && phase.vibrate.lastFiveSecs) {
        			navigator.vibrate(100);
        	}
        	
        	currentTime = timeRemaining;
        	
        	// Display an additional second (Show 00:01 for the final second rather than 00:00)
        	const timeRemainDisplay = timeRemaining + 1;

        if (setting.timeRemain / setting.timeSet >= 0) {
        		const mins = Math.floor(timeRemainDisplay / 60);
        		const secs = Math.floor(timeRemainDisplay) % 60;
        	
            setText(document.querySelector("#text-run-minute"),
                    addLeadingZero(mins, 2));
            setText(document.querySelector("#text-run-second"),
                    addLeadingZero(secs, 2));
            applyStyleTransition(elmDotProg, ROTATE_DATA_PROGRESS, "START", "END", 1 - (setting.timeRemain / setting.timeSet));
            
            animTimePrevFrame = timestamp;
            animRequest = window.requestAnimationFrame(drawRunAnimationFrame);
        } else {
        		processEndOfPhase();
        }
    }
    
    function processEndOfPhase() {
    		navigator.vibrate(500);
	    	if (currentPhase + 1 < workouts[day].phases.length) {
	        startNextPhase();
	    } else {
	    		stopRunAnimation();
	        pageController.moveBackPage();
	        	tizen.power.release("SCREEN");
	    }
    }
    
    function restartCurrentPhase() {
    		stopRunAnimation();
    		startPhase(currentPhase);
    }

    function startNextPhase() {
    		stopRunAnimation();
    		startPhase(currentPhase +1);
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
            if (direction === "CW" && day + 1 < workouts.length) {
                	day++;
            } else if (direction === "CCW" && day - 1 >= 0) {
            		day--;
            }
            tizen.preference.setValue('currentDay', day);
            	updateMenuScreen();
        }
    }
    
    function updateMenuScreen(){
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
    				workout.phases.length + " phases - Duration: " + addLeadingZero(mins, 2) + ":" + addLeadingZero(secs, 2));
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
            btnSkip = document.querySelector("#btn-skip");

        // Add hardware key event listener
        window.addEventListener("tizenhwkey", keyEventHandler);
        document.addEventListener("rotarydetent", rotaryEventHandler);

        btnStart.addEventListener("click", function() {
        		tizen.power.request("SCREEN", "SCREEN_DIM");
            pageController.movePage("page-run");
            btnPause.style.backgroundImage = "url('./image/button_stop.png')";
            startPhase(0);
        });
        btnPause.addEventListener("click", function() {
            if (animRequest) {
            		tizen.power.release("SCREEN");
                stopRunAnimation();
                btnPause.style.backgroundImage = "url('./image/button_start.png')";
            } else {
            		tizen.power.request("SCREEN", "SCREEN_DIM");
                animRequest = window.requestAnimationFrame(drawRunAnimationFrame);
                btnPause.style.backgroundImage = "url('./image/button_stop.png')";
            }
        });
        btnSettime.addEventListener("click", function() {
        		tizen.power.release("SCREEN");
            stopRunAnimation();
            pageController.moveBackPage();
        });
        	btnReset.addEventListener("click", function() {
        		btnPause.style.backgroundImage = "url('./image/button_stop.png')";
        		restartCurrentPhase();
        	});
        	btnSkip.addEventListener("click", function() {
        		btnPause.style.backgroundImage = "url('./image/button_stop.png')";
        		processEndOfPhase();
        	});
    }

    /**
     * Initializes the application.
     * @private
     */
    function init() {
        setDefaultEvents();
        updateMenuScreen();
        
        // Add both pages to the page controller
        pageController.addPage("page-main");
        pageController.addPage("page-run");
    }

    window.onload = init;
}());
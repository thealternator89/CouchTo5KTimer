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

function formatTime(time) {
	var timeStr = "";
	for (var i = 0; i < time.length; i++) {
		if (timeStr) {
			timeStr += ":";
		}
		timeStr += addLeadingZero(time[i], 2);
	}
	return timeStr;
}

function secondsToMinsSecs(seconds) {
	return {
		mins: Math.floor(seconds / 60),
		secs: Math.floor(seconds) % 60
	}
}

/**
 * Vibrate 
 * @param timing
 */
function vibrate(timing) {
	console.log("Vibrating - " + JSON.stringify(timing));
	navigator.vibrate(timing);
}

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

function setHtmlContent(elm, html) {
	emptyElement(elm);
	elm.innerHTML = html;
}


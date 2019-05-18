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

/**
 * Vibrate 
 * @param timing
 */
function vibrate(timing) {
	console.log("Vibrating - " + JSON.stringify(timing));
	navigator.vibrate(timing);
}


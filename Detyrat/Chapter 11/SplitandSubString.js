//Fig. 11.9: SplitandSubString.js
//String object method split and substring
function splitButtonPressed() {
	var inputString = document.getElementById('inputField').value;
	var tokens = inputString.split(" ");

	var results = document.getElementById('results');
	results.innerHTML = "<p>The sentence split into two words is: </p>" + "<p class='indent'>" + tokens.join("</p><p class='indent'>") + "</p>" + "<p class='indent'>'" + inputString.substring(0, 10) + "'</p>";
} //end function splitButtonPressed

//register click event handler for searchButton
function start() {
	var splitButton = document.getElementById('splitButton');
	splitButton.addEventListener("click", splitButtonPressed, false);
} //end function start

window.addEventListener("load", start, false);
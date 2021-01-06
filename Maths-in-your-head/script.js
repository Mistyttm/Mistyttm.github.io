//VARIABLES
//getting random number and displaying it on screen
//addition and subtraction variables
var compOneE = Math.ceil(Math.random()*10);
var compTwoE = Math.ceil(Math.random()*10);
var compOneM = Math.ceil(Math.random()*50);
var compTwoM = Math.ceil(Math.random()*50);
var compOneH = Math.ceil(Math.random()*100);
var compTwoH = Math.ceil(Math.random()*100);

//Multiplication an division variables
var compOneDME = Math.ceil(Math.random()*5);
var compTwoDME = Math.ceil(Math.random()*5);
var compOneDMM = Math.ceil(Math.random()*10);
var compTwoDMM = Math.ceil(Math.random()*10);
var compOneDMH = Math.ceil(Math.random()*15);
var compTwoDMH = Math.ceil(Math.random()*15);

var addScore = 0;
var wrong = 0;
var complete = false;
var answer = 0;
var correct = 0;
var answered = 0;
var incorrect = false;



/* Set the width of the sidebar to 250px (show it) */
function openNav() {
	document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
	document.getElementById("mySidepanel").style.width = "0";
}

function fnAdd() {
	window.location.href = "rulesAdd.html";
}

function fnSub() {
	window.location.href = "rulesSub.html";
}

function fnMult() {
	window.location.href = "rulesMult.html";
}

function fnDiv() {
	window.location.href = "rulesDiv.html";
}

function fnPlayAE() {
	window.location.href = "additione.html";
}
function fnPlayAM() {
	window.location.href = "additionm.html";
}
function fnPlayAH() {
	window.location.href = "additionh.html";
}

function fnPlaySE() {
	window.location.href = "subtractione.html";
}

function fnPlaySM() {
	window.location.href = "subtractionm.html";
}

function fnPlaySH() {
	window.location.href = "subtractionh.html";
}

function fnPlayME() {
	window.location.href = "multiplicatione.html";
}

function fnPlayMM() {
	window.location.href = "multiplicationm.html";
}

function fnPlayMH() {
	window.location.href = "multiplicationh.html";
}

function fnPlayDE() {
	window.location.href = "divisione.html";
}

function fnPlayDM() {
	window.location.href = "divisionm.html";
}

function fnPlayDH() {
	window.location.href = "divisionh.html";
}

function navError() {
	alert("Sorry, you must complete the quiz");
}

//maths for addition game easy difficulty

const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.classList.remove('start');
  btnLeft.classList.add('stop');
}
function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.innerText == "START") {
    btnLeft.innerText = "STOP";
    btnRight.innerText = "SPLIT";
    chronometer.startClick();
  } else {
    btnLeft.innerText = "START";
    btnRight.innerText = "RESET";
    chronometer.stopClick();
  }
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle("split");
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  // ... your code goes here
});
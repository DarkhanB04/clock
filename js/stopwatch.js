let seconds = 00;
let tens = 00;
let mins = 00;
let outputSecs = document.getElementById("seconds");
let outputTens = document.getElementById("tens");
let outputMins = document.getElementById("minutes");
var startBtn = document.getElementById("btn-start");
var stopBtn = document.getElementById("btn-stop");
var resetBtn = document.getElementById("btn-reset");
var Interval;

startBtn.addEventListener("click", () => {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10); // millisecond 10 = 0.01 second
});

stopBtn.addEventListener("click", () => {
  clearInterval(Interval);
});

resetBtn.addEventListener("click", () => {
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  mins = "00";
  outputMins.innerHTML = mins;
  outputSecs.innerHTML = seconds;
  outputTens.innerHTML = tens;
});

function startTimer() {
  tens++;
  if (tens <= 9) {
    outputTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    outputTens.innerHTML = tens;
  }

  if (tens > 99) {
    seconds++;
    outputSecs.innerHTML = "0" + seconds;
    tens = 0;
    outputTens.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    outputSecs.innerHTML = seconds;
  }
  if (seconds == 60) {
    seconds = 0;
    outputSecs.innerHTML = "0" + 0;
    mins++;
    outputMins.innerHTML = "0" + mins;
  }
  if (mins < 10) {
    outputMins.innerHTML = "0" + mins;
  }
  if (mins > 9) {
    outputMins.innerHTML = mins;
  }
}

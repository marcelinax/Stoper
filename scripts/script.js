"use strict";

let start = 0;
let isRunning = false;
let countClick = 0;
const startBtn = document.getElementById("start");
console.log(isRunning);
const calcTime = () => {
  if (isRunning) {
    if (countClick < 1) {
      const minutes = Math.floor((start / 60) % 60);
      const seconds = Math.floor(start % 60);
      start++;
      const time = (document.getElementById("time").innerHTML = `${timeFormat(
        minutes
      )}:${timeFormat(seconds)}`);

      return time;
    } else {
      resetTime();
      countClick = 0;
    }
  }
  return;
};

const changeButton = () => {
  if (isRunning) startBtn.innerHTML = "Stop";
  else startBtn.innerHTML = "Start";
};

const setStart = () => {
  startBtn.addEventListener("click", () => {
    isRunning = !isRunning;
    changeButton();
    countClick++;
  });
};

const timeFormat = (time) => {
  if (time < 10) time = `0${time}`;
  return time;
};

const resetTime = () => {
  start = 0;
  startBtn.innerHTML = "Stop";
};

document.getElementById("reset").addEventListener("click", () => {
  resetTime();
});

setStart();
setInterval(calcTime, 1000);

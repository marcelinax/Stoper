"use strict";

let start = 0;
let isRunning = false;
let countClick = 0;
const startBtn = document.getElementById("start");

const calcTime = () => {
  if (isRunning) {
    if (countClick < 2) {
      const minutes = Math.floor((start / 60) % 60);
      const seconds = Math.floor(start % 60);
      start++;
      const time = (document.getElementById("time").innerHTML = `${timeFormat(
        minutes
      )}:${timeFormat(seconds)}`);

      return time;
    } else {
      start = 0;
      countClick = 0;
      changeButton();
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
  countClick = 0;
  document.getElementById("time").innerHTML = "00:00";
  isRunning = false;
  changeButton();
};

document.getElementById("reset").addEventListener("click", () => {
  resetTime();
});

setStart();
setInterval(calcTime, 1000);

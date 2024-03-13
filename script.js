const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const seconds = document.querySelector("#seconds");
const minutes = document.querySelector("#minutes");
const hours = document.querySelector("#hours");

let counterSec = 0;
let counterMin = 0;
let counterHour = 0;
let timer;

start.addEventListener("click", () => {
  timer = setInterval(updateTime, 1000);
});

function updateTime() {
  counterSec++;
  seconds.textContent = counterSec;
  if (counterSec >= 60) {
    counterSec = 0;
    seconds.textContent = "0";
    counterMin++;
    minutes.textContent = counterMin;
    if (counterMin >= 60) {
      counterMin = 0;
      minutes.textContent = "0";
      counterHour++;
      hours.textContent = counterHour;
    }
  }
  //   timer = setTimeout(updateTime, 1000);
}
//padZero????!!!
reset.addEventListener("click", () => {
  clearInterval(timer);
  seconds.textContent = "00";
  minutes.textContent = "00:";
  hours.textContent = "00:";
  counterSec = 0;
  counterMin = 0;
  counterHour = 0;
  return;
});
pause.addEventListener("click", () => {
  clearInterval(timer);
});

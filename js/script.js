let currentTime = document.querySelector(".clock-container");
let alarmTime,
  isAlarmSet = false;
ringtone = new Audio("./audio/alarm.mp3");
//-------Clock-------
function clock() {
  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  let time = `${hours}:${min}:${sec}`;
  currentTime.innerText = time;
  if (alarmTime == `${hours}:${min}`) {
    ringtone.play();
    ringtone.loop = true;
  }
}
clock();
setInterval(clock, 1000);
//-------Alarm-------
const alarmBtn = document.querySelector(".input-btn");
const selectMenu = document.querySelectorAll("select");
for (let i = 23; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
function setAlarm() {
  if (isAlarmSet) {
    alarmTime = "";
    ringtone.pause();
    document.querySelector(".alarm-time").classList.remove("disable");
    alarmBtn.innerText = "Set Alarm";
    return (isAlarmSet = false);
  }
  let time = `${selectMenu[0].value}:${selectMenu[1].value}`;
  if (time.includes("Hours") || time.includes("Minute")) {
    alert("Please, enter the correct time!");
  }
  isAlarmSet = true;
  alarmTime = time;
  document.querySelector(".alarm-time").classList.add("disable");
  alarmBtn.innerText = "Clear alarm";
}
alarmBtn.addEventListener("click", setAlarm);
//-----StopWatch------

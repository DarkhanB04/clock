let years = document.getElementById("year");
let months = document.getElementById("month");
let days = document.getElementById("day");
let countedDays = document.getElementById("days");
let countedHours = document.getElementById("hours");
let countedMinutes = document.getElementById("minutes");
let countedSeconds = document.getElementById("seconds");
const submitBtn = document.querySelector(".submit");

let isCountdown = false;

submitBtn.addEventListener("click", function () {
  if (isCountdown) {
    years.value = "";
    months.value = "";
    days.value = "";
    submitBtn.innerText = "Submit";
    return (isCountdown = false);
  }
  setCountdown();
  setInterval(setCountdown, 1000);
  isCountdown = true;
  submitBtn.innerText = "Stop";
});
function setCountdown() {
  let yearsValue = years.value;
  let monthsValue = months.value;
  let daysValue = days.value;
  let date = new Date();

  let inputDate = new Date(
    `${yearsValue}-${monthsValue}-${daysValue}T00:00:00`
  );
  let diff = inputDate - date;
  let d = Math.abs(Math.floor(diff / 1000 / 60 / 60 / 24));
  let h = Math.abs(Math.floor(diff / 1000 / 60 / 60)) % 24;
  let m = Math.abs(Math.floor(diff / 1000 / 60)) % 60;
  let s = Math.abs(Math.floor(diff / 1000)) % 60;
  countedDays.innerHTML = d;
  countedHours.innerHTML = h < 10 ? "0" + h : h;
  countedMinutes.innerHTML = m < 10 ? "0" + m : m;
  countedSeconds.innerHTML = s < 10 ? "0" + s : s;
}

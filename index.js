function updateMilliseconds() {
  const time = document.querySelector("[data-testid=currentUTCTime]");
  const UTC = Date.now();

  time.innerHTML = UTC;
}

setInterval(updateMilliseconds, 1000);

const Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  " Saturday",
];
const today = new Date();
const dayValue = today.getDay();
const Day = document.querySelector("[data-testid=currentDayOfTheWeek]");
Day.innerHTML = Days[dayValue];

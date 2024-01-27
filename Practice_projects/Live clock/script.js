const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

setInterval(() => {
  let currentDate = new Date();
  let currentHour = currentDate.getHours();
  let currentMinutes = currentDate.getMinutes();
  let currentSeconds = currentDate.getSeconds();
  hours.innerHTML = currentHour;
  minutes.innerHTML = currentMinutes;
  seconds.innerHTML = currentSeconds;
}, 1000);

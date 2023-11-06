const day = document.getElementById("day");
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const currentdate = new Date();
console.log(currentdate);
date.innerHTML = currentdate.getDate();
day.innerHTML = days[currentdate.getDay()];

month.innerHTML = months[currentdate.getMonth()];
year.innerHTML = currentdate.getFullYear();

const pBody = document.getElementById("pbody");
const timeBox = document.getElementById("timer");
const hit = document.getElementById("hitbubble");

let score = document.getElementById("score");
console.log(score);

let clutter = "";
var timer = 60;
function createHit() {
  hit.innerText = Math.floor(Math.random() * 10);
}
function runTimer() {
  let timerInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      timeBox.innerText = timer;
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);
}
function makeBubble() {
  for (let i = 0; i < 108; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
    pBody.innerHTML = clutter;
  }
}
createHit();
runTimer();
makeBubble();

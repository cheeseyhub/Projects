const pBody = document.getElementById("pbody");
const timeBox = document.getElementById("timer");
const hit = document.getElementById("hitbubble");



let randomNumber = 0;
var score = 0;

let clutter = "";
var timer = 60;
function createHit() {
  randomNumber = Math.floor(Math.random() * 10)
  hit.innerText = randomNumber;
  
}
function increaseScore(){
  score += 10;
  document.getElementById("score").innerText = score;
  
}
function runTimer() {
  let timerInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      timeBox.innerText = timer;
    } else {
      clearInterval(timerInterval);
      pBody.innerHTML = ''
    }
  }, 1000);
}
function makeBubble() {
  for (let i = 0; i < 114; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
    pBody.innerHTML = clutter;
  }
}
pBody.addEventListener('click',(e)=>{
let clickedNumber = e.target.innerText;
if(clickedNumber == randomNumber){
  
  increaseScore()
}
}  )
createHit();
runTimer();
makeBubble();

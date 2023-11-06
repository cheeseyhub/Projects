let playGame = confirm("Do you want to play");
if (playGame) {
  //play
  let playerChoice = prompt("please enter rock paper or scissors");
  if (playerChoice) {
    let player = playerChoice.trim().toLowerCase();
    if (
      playerChoice === "rock" ||
      playerChoice === "paper" ||
      playerChoice === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";
      let result =
        computer === player
          ? "Tie game"
          : player === "rock" && computer === "paper"
          ? `Player : ${player}\n Computer : ${computer}\n computer wins`
          : player === "paper" && computer === "scissors"
          ? `player: ${player}\n computer : ${computer}\n computer wins`
          : player === "rock" && computer === "scissors"
          ? `player: ${player}\n computer : ${computer}\n computer wins`
          : `Player : ${player}\n Computer : ${computer}\n Player wins`;

      alert(result);
      let playagain = confirm("Do you want to play again");
      playagain ? location.reload() : alert("thanks for playing");
    } else {
      alert("you did not enter rock paper or scissors");
    }
  } else {
    alert("I guess you changed ");
  }
} else {
  alert("Maybe next time.");
}

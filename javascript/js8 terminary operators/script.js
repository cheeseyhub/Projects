//conditionals terminary operators

//syntax
// like shorthand for if
//condition ? if true : if false
// colon is like else like in  if and else statement

/* let testScore = 90;
let myGrade =
  testScore > 89
    ? "A"
    : testScore > 79
    ? "B"
    : testScore > 69
    ? "C"
    : testScore > 59
    ? "D"
    : "F";
console.log(`My grade is ${myGrade}`); */

//Rock paper and scissors

let player = "paper";
let com = "paper";

let result =
  player === com
    ? "Tie game"
    : player === "rock" && com === "paper"
    ? "Computer Wins"
    : player === "paper" && com === "scissors"
    ? "Computer Wins"
    : player === "scissors" && com === "rock"
    ? "Computer Wins"
    : "Player wins";
console.log(result);

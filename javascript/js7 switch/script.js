//Conditionals : switch statements

/* //syntax // switch statements need strict matches
 switch (expression or value ) {


    case choice1:
        //run this code
        break; // break makes it so if it is a match it stops the evaluation stage of case 2

        case choice2:
            //runthis code
            break;

            //as many cases as you like

            default:
                //run this if no code matches
                //no need for break here

 } */

/* switch (Math.floor(Math.random() * 3 + 1)) {
  case 1:
    console.log("NO MATCH");
    break;

  case 2:
    console.log("YES MATCH");
    break;

  default:
    console.log("NO MATCH");
} */
//rock papper scissors
let player = "rock";
let com = "paper";

switch (player) {
  case com:
    console.log("Tie GAME");
    break;

  case "rock":
    if (com === "paper") {
      console.log("Computer wins");
    } else {
      console.log("PLAyer wins");
    }
    break;

  case "scissors":
    if (com === "paper") {
      console.log("Player wins");
    } else {
      console.log("computer wins");
    }
    break;
  default:
    if (com === "rock") {
      console.log("COM wins");
    } else {
      console.log("player wins");
    }
}

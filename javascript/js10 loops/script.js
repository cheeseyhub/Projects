//Loops syntax
/* while (condition) {
    runsome code
}*/

/* let number = 0;
while (number < 20) {
  number++; //adds 1 to it. it adds one before it adds to console

  console.log(number);
} // do not create endless loops

// || DO while loops
do {
  number += 2;
  console.log(number);
} while (number < 20); //executes code atlest once

// || For Loop
//syntax     do not need to be in the parenthesis
/* for (variable; while it is condition; do this){
    runsome codes
}  */
/* let name = "Muhammedibrahim";
for (let i = 0; i = name.length; i++) {
  console.log(name.charAt(i));
} */

let name = "Muhammedibrahim";
let counter = 0;
let myLetter;

while (counter <= 3) {
  //makes it go forever
  myLetter = name[counter]; // pulling letter out of name with brackets
  console.log(myLetter);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  if (myLetter === "i") break;

  counter++;
}

// Conditionals if :statements

// Syntax

/* if (condition) {
  //run some code
} else {
  //run some code
} */
/* let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = false;
let reply;

if (customerIsBanned) {
  reply = "No soup for you";
} else if (soup && crackers) {
  reply = `Here is your order of ${soup} & crackers`;
} else {
  reply = `we do not have any  soup or crackers`;
}
console.log(reply); */

let testScore = 89;
let grade;
let collegeStudent = true;

if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else if (testScore >= 70) {
  grade = "C";
} else if (testScore >= 60) {
  grade = "D";
} else {
  if (collegeStudent) {
    grade = "U";
  } else {
    grade = "F";
  }
}
console.log(grade);

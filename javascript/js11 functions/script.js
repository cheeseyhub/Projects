// function

//method are built in functions

//function declaration syntax

/* function sum  name ( parameters ) {
  return /* value that function will return  2 + 2;
}
console.log(sum() /* needs parentheses ); */

/* /* function sum(num1, num2) {
  if (num1 === undefined) {
    return num1 + num1;
  }
  return num1 + num2;
} 
console.log(sum(2)); */
function getUserNameFromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("somerandomguy@gmail.com"));
const getUserNameFromEmail = /* function */ (
  /* no name is anonaymous */ email
) => /* same as function also called arrow function */ {
  /* same result */
  return email.slice(0, email.indexOf("@"));
};
console.log(getUserNameFromEmail("somerandomguy@gmail.com"));

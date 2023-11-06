//alert shows information and asks them to clock ok
/* alert("Hello"); */

/* let boolean = confirm("ok===true\ncancel===false");
console.log(boolean);
 */

let name = prompt("Please enter your name");
if (name) {
  //if name has no length value is false .null doesnt pass the test
  //knowledge eski operator are two question marks they basically say if it doesnt have value null or undefiend then send this to console
  console.log(name);// trim removes white space
} else {
  console.log("You did not enter your name");
}

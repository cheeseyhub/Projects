//Arrays are usesd to store data
// it give the contents of array as a string

//add elements to array

//console.log(myArray);
//length of array
//console.log(myArray.length);

//last element of array

//console.log(myArray[myArray.length - 1]);

//adding data to array
//push adds to the end
//myArray.push("23");
//console.log(myArray);
//pop removes and give element from te end
//const lastLetter = myArray.pop();
//console.log(lastLetter);

//unshift adds to the beginning
//shift removes from the beginning
/* myArray.unshift("stuff");
console.log(myArray); */

//delete makes a position of the array empty and but the position stays there

/* delete myArray[2];
console.log(myArray); */
//reverse method reverses an array
/* const myArray = ["a", "b", "c", "d"];
const newArray = myArray.join(); // split creats a new array accodrding to the value give

const newb = newArray.split(",");
console.log(newb); */

//concat joins to arrays together

const myArrayA = ["a", "b", "c", "d"];
const myArrayB = ["k", "n", "t", "c"];

const newArray = [
  ...myArrayA,
  ...myArrayB,
]; /* myArrayA.concat(myArrayB);  ...spread is used to take out individual letters and add them */
console.log(newArray);

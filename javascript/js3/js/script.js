// strings they are all case sensitive (camelsCaseSensitive)
const myVariable = "Mathematics";

//the length property
/* length property returns the number of letters in the string. period after the variable */
/* console.log(myVariable.length); */

//charAt property it returns character at the position of we provide
/* console.log(myVariable.charAt(2)); */

/*indexOf it tells its first position of occurrence and last index of is the opposite*/
//console.log(myVariable.lastIndexOf("t"));

/* slice accepts starting and ending position and returns the letters of strings to that point */
//console.log(myVariable.slice(5, 2));

//toUpperCase returns the string to be uppercase vice versa for lower case
/* console.log(myVariable.toUpperCase()); */

//includes returnes boolean data if the  given data is not inside it then it returns false and vice versa
//console.log(myVariable.includes("Ma"));

//split method splits a string where the letter we provide occurs it returns multiple strings in an array the letters are not included providing empty splits all letters
/* console.log(myVariable.split("")); */

let v = "Mathematics";
console.log(v.slice(-1));

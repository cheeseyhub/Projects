//objects
//syntax: scope name = {key : value, key :value}

//accessing the object by using dot notation or brackets when using bracket the key must be put in quotes
//destructing objects

let food = {
  tea: "lemon",
};
// the first pulls value from key adds it to the second variable can add multiple by using comma as sepration
const { tea: myFavorite } = food;
console.log(myFavorite);

// Write a function to generate a random number greater than or equal to
// with a start variable and strictly less than an end variable .
// These two variables are the ends of the range for the general number: [start, end)
// The function getRandom(start, end) returns a random integer generated in the range defined by 
// provided start and end variables.

getRandom = (start, end) =>  Math.floor(Math.random() * (end - start) + start); 

console.log("getRandom from 3 to 6 is: " + getRandom(3,6));
console.log("getRandom from 10 to 20 is: " + getRandom(10,20));
console.log("getRandom from -5 to 5 is: " + getRandom(-5,5));

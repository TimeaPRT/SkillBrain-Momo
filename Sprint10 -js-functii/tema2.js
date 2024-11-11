// Write a function to generate a random number greater than or equal to
// with a start variable and strictly less than an end variable .
// These two variables are the ends of the range for the general number: [start, end)
// The function getRandom(start, end) returns a random integer generated in the range defined by 
// provided start and end variables.

getRandom = (start, end) =>  Math.floor(Math.random() * (end - start) + start); 

console.log(getRandom(3,6));
// Write a function to add unlimited numbers
// The addNumber() function returns the sum of all the numbers passed as arguments to the function.
// The number of arguments is not defined. An unlimited number of numbers can be transmitted.

const addNumber = (...arguments) => arguments.reduce((acc, current) => acc + current, 0);

addNumber(1, 2, 3);
addNumber(1, 2, 3, 4, 5);
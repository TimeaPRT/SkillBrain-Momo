// Create a function that reverses a string of numbers

function reverseArray(array) {
    return array.reverse();
}

const array1 = [1, -5, 20, -34, 16, 29, 36, -4];
const array2 = [...array1];

console.log(reverseArray(array2));
console.log(array1);
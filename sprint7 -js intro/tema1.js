// Function that checks if a number is divisible by 10 using if-else
function isDivisibleBy10(number) {
    if (number % 10 === 0) {
        // Return true if divisible by 10
        return true;  
    } else {
        // Return false otherwise
        return false; 
    }
}

// Function that runs the program
function runProgram() {
    const number1 = 100;
    const number2 = 23;

    const result1 = isDivisibleBy10(number1);
    const result2 = isDivisibleBy10(number2);

    // Output: true
    console.log(result1);

    // Output: false
    console.log(result2);
    // Return a number instead of void
    return 0; 
}


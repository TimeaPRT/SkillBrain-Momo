// Function that returns the day of the week based on the input number (in English)
function getDayOfWeek(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day number";
    }
    return dayName;
}

// Call the functions to execute the program
runProgram();

tellFortune("5", "no huby", "Romania", "Programmer");

// Get the day of the week based on input number (in English)

// Output: Monday
console.log(getDayOfWeek(1));

// Output: Friday 
console.log(getDayOfWeek(5)); 
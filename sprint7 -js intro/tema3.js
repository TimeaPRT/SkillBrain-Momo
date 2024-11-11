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

dayName +=" Sunday";
break;
default:
dayName +=" the present";

}
return dayName;
}

//Show more results:

console.log(getDay(0));
console.log(getDay(1));
console.log(getDay(7));
console.log(getDay(5));
console.log(getDay(8));
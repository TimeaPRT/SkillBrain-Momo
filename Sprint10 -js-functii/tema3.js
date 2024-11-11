// Write a function to find the number of occurrences of a letter in a string
// The letterCount() function returns the number of occurrences of a letter passed as a parameter in a given string.

const letterCount = (str, letter) => {
    let num = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === letter) {
            num++;
        }
     }
     return num;
 }
 
 const showNumberOfLetters = (text, letter) => 
     console.log(`Letter '${letter}' it shows  ${letterCount(text, letter)} times in the string '${text}'.`);
 
 showNumberOfLetters("I like to program", "a");
 showNumberOfLetters("I want to work in it", "r");
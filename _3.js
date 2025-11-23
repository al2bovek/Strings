"use strict";
// Acronyms: Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized)
const str = `Acronyms: Create a function that, given a string, returns the string's acronym (first letter of the word capitalized)`;

const firstLetterOfTheWordCapitalize = (str) => {
    const fn = (word) => {
        return word[0].toUpperCase() + word.substring(1);
    }
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let temp;
        temp = str[i];
        if (temp === " ") {
            temp = ` ${str[i + 1].toUpperCase()}`
           result += temp;
           i++;
        } else result += temp;
        
    }
    return result;
}
document.getElementById("string").innerHTML = firstLetterOfTheWordCapitalize(str);
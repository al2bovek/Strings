"use strict";
// Remove Blanks: Create a function that, given a string, returns all of that string’s contents, but without blanks.
const str = `Remove Blanks: Create a function that, given a string, returns all of that string's contents, but without blanks.`;

const removeBlanks = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
       if (str[i] !== " ") {
        result += str[i];
       } 
    }
    return result;
}
document.getElementById("string").innerHTML = removeBlanks(str);
"use strict";
// Write a JavaScript function to extract a specified number of characters from a string.

const str = `Write a JavaScript function to extract a specified number of characters from a string.`;
const num = prompt("number of characters");
const extractNumberOfCharacters = (str, num) => {
    let result = "";
    for (let i = 0; i < num; i++) {
       result += str[i];
    }
    return result;
}
document.getElementById("string").innerHTML = extractNumberOfCharacters(str, num);
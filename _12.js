"use strict";
// Write a JavaScript function to capitalize the first letter of a string.

const str = `write a JavaScript function to capitalize the first letter of a string.`;
const toCapitalizeFirstLetterOfAString = (str) => {
    let result = `${str[0].toUpperCase()}${str.substring(str.indexOf(str[1]))}`;
    return result;
}
document.getElementById("string").innerHTML = toCapitalizeFirstLetterOfAString(str);
"use strict";
// Write a JavaScript function to capitalize the first letter of each word in a string.

const str = `Write a JavaScript function to capitalize the first letter of each word in a string.`;
const toCapitalizeFirstLetterOfEachWordInAString = (str) => {
    let result = [];
    const capitalize = (str) => `${str[0].toUpperCase()}${str.substring(1)}`;
    const temp = str.split(" ");
    for (const element of temp) {
        result.push(capitalize(element));
    }
    return result.join(" ");
}
document.getElementById("string").innerHTML = toCapitalizeFirstLetterOfEachWordInAString(str);
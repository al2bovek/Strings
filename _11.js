"use strict";
// Write a JavaScript function to parameterize a string.

const str = `Write a JavaScript function to parameterize a string.`;
const toParametrizeString = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
        result += "-";
        continue;
        }
        result += str[i];
    }
    return result;
}
document.getElementById("string").innerHTML = toParametrizeString(str);
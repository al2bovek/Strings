"use strict";
// Write a JavaScript function to split a string and convert it into an array of words.

const str = `Write a JavaScript function to split a string and convert it into an array of words.`;
const strToArr = (str) => {
    const result = [];
    let temp = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            temp += str[i];
        } else {
            result.push(temp);
            temp = "";
        }
    }
    return result;
}
document.getElementById("string").innerHTML = strToArr(str);
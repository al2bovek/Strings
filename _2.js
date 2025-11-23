"use strict";
// Get Digits: Create a function that given a string, returns the integer made from the strings digits.
const str = String(new Date);

const getDigits = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        console.log(str[i], +str[i]);
       if (+str[i]) {
        result += str[i];
       } 
    }
    return result;
}
document.getElementById("string").innerHTML = getDigits(str);
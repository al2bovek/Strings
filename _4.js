"use strict";
// Count Non-Spaces: Create a function that, given a string, returns the number of non-space characters found in the string.

const str = `Count Non Spaces: Create a function that, given a string, returns the number of non-space characters found in the string.`;

const countNonSpaces = (str) => {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
           result++;
        } 
    }
    return result;
}
document.getElementById("string").innerHTML = countNonSpaces(str);
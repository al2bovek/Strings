"use strict";
// Remove Shorter Strings: Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

const str = `Remove Shorter Strings: Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.`;
const arr = str.split(",");
const num = +prompt("a numerical value");
const removeShorterStrings = (arr, num) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > num) {
           result.push(arr[i]);
        } 
    }
    return result;
}
document.getElementById("string").innerHTML = removeShorterStrings(arr, num);
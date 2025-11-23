"use strict";
// Write a JavaScript function to check whether an `input` is a string or not.
let anInput = "input";
anInput = 999;
anInput = [1, 2, 4, 0];
const checkInput = (anInput) => {
    let result = typeof anInput === "string";
    return result;
}
document.getElementById("string").innerHTML = checkInput(anInput);
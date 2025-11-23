"use strict";
// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.

const str = `Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.`;
const swapCase = (str) => {
    let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[i] === str[i].toUpperCase() ? str[i].toLowerCase() : str[i].toUpperCase();
  }
  return result;
}
document.getElementById("string").innerHTML = swapCase(str);
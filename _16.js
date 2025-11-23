"use strict";
// Write a JavaScript function to uncamelize a string.

const str =`writeAJavaScriptFunctionToUncamelizeAString.`;
const sp = prompt("separator");
const uncamelize = (str, sp = " ") => {
  let result = "";
for (let i = 0; i < str.length; i++) {
  str[i] === str[i].toUpperCase() ? result += `${sp}${str[i].toLowerCase()}` : result += str[i];
}
 return result;
}
document.getElementById("string").innerHTML = uncamelize(str, sp);
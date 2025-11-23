"use strict";
// Write a JavaScript function to convert a string into camel case.

let str = `Write a JavaScript function to convert a string into camel case.`;

const camelize = (str) => {
  const capitalize = (str) => `${str[0].toUpperCase()}${str.substring(1)}`;
  let result = [];
  const temp = str.split(" ");
  for (let i = 0; i < temp.length; i++) {
    result.push(capitalize(temp[i]));
  }
  const firstWord = `${result[0][0].toLowerCase()}${result[0].substring(1)}`;
  result[0] = firstWord;
  return result.join("");
}
document.getElementById("string").innerHTML = camelize(str);
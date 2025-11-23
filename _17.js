"use strict";
// Write a JavaScript function to concatenates a given string n times (default is 1).

const str = `Write a JavaScript function to concatenates a given string n times (default is 1).`;
const num = prompt("n times");
const repeat = (str, num = 1) => {
  let result = "";
for (let i = 0; i < num; i++) {
 result += str;
}
 return result;
}
document.getElementById("string").innerHTML = repeat(str, num);
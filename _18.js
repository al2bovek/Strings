"use strict";
// Write a JavaScript function to insert a string within a string at a particular position (default is 1).

const str = `Write a JavaScript function to insert a string within a string at a particular position (default is 1).`;
const substr = prompt("substring");
const num = prompt("n times from 1 ...");
const insert = (str, substr = '', num = 1) => {
  if (!num) {
    num = 1;
  }
  num -= 1;
  const result = `${str.slice(0, num)} ${substr} ${str.slice(num)}`;
  return result;
}
document.getElementById("string").innerHTML = insert(str, substr, num);
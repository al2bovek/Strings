"use strict";
// Write a JavaScript function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.

const str = `Write a JavaScript function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.`;
const num = prompt("number");
const spChar = prompt("specified characters");

const textTruncate = (str, num, spChar = "...") => {
  if (str.length > num) {
    const result = `${str.substring(0, num)} ${spChar}`;
    return result;
  }
  return str;
}
document.getElementById("string").innerHTML = textTruncate(str, num, spChar);
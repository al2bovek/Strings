"use strict";
// Write a JavaScript function to humanize number.

const num = prompt("a number: 1, 2, 3... ");
const humanize_format = (num) => {
  const suffixes = ["st", "nd", "rd", "th"];
  let result = '';
  const lastDigits = [1, 2, 3];
  const lastTwoDigit = num.substring(num.length - 2);
  if (lastTwoDigit == 11 || lastTwoDigit == 12 || lastTwoDigit == 13) {
    result += `${num}${suffixes[3]}`;
    return result;
  }
  for (let i = 0; i < lastDigits.length; i++) {
    if (lastDigits[i] == num.at(-1)) {
      result += `${num}${suffixes[i]}`;
      return result;
    }
  }
  result += `${num}${suffixes[3]}`;
  return result;
}
document.getElementById("string").innerHTML = humanize_format(num);
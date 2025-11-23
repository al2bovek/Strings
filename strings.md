## Remove Blanks: Create a function that, given a string, returns all of that string’s contents, but without blanks.

## Get Digits: Create a function that given a string, returns the integer made from the strings digits.

## Acronyms: Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized)

## Count Non-Spaces: Create a function that, given a string, returns the number of non-space characters found in the string.

## Remove Shorter Strings: Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

---

## Write a JavaScript function to check whether an `input` is a string or not.

- console.log(is_string('w3resource')); --> true
- console.log(is_string([1, 2, 4, 0])); -->false

---

## Write a JavaScript function to check whether a string is blank or not.

- console.log(is_Blank('')); // true
- console.log(is_Blank('abc')); // false

---

## Write a JavaScript function to split a string and convert it into an array of words.

- console.log(string_to_array("Robin Singh")); --> ["Robin", "Singh"]

---

## Write a JavaScript function to extract a specified number of characters from a string.

- console.log(truncate_string("Robin Singh",4)); --> "Robi"

---

## Write a JavaScript function to convert a string in abbreviated form.

- console.log(abbrev_name("Robin Singh")); --> "Robin S."

---

## Write a JavaScript function to hide email addresses to protect from unauthorized user.

-console.log(protect_email("robin_singh@example.com")); --> "robin...@example.com"

---

## Write a JavaScript function to parameterize a string.

- console.log(string_parameterize("Robin Singh from USA.")); --> "robin-singh-from-usa"

---

## Write a JavaScript function to capitalize the first letter of a string.

- console.log(capitalize('js string exercises')); --> "Js string exercises"

---

## Write a JavaScript function to capitalize the first letter of each word in a string.

-console.log(capitalize_Words('js string exercises')); --> "Js String Exercises"

---

## Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.

- console.log(swapcase('AaBbc')); --> "aAbBC"

---

## Write a JavaScript function to convert a string into camel case.

- console.log(camelize("JavaScript Exercises")); --> "JavaScriptExercises"
- console.log(camelize("JavaScript exercises")); --> "JavaScriptExercises"
- console.log(camelize("JavaScriptExercises"));--> "JavaScriptExercises"

---

## Write a JavaScript function to uncamelize a string.

- console.log(uncamelize('helloWorld')); --> "hello world"
- console.log(uncamelize('helloWorld','-')); --> "hello-world"
- console.log(uncamelize('helloWorld','_')); -->"hello_world"

---

## Write a JavaScript function to concatenates a given string n times (default is 1).

- Test Data :
 - console.log(repeat('Ha!'));  --> "Ha!"
 - console.log(repeat('Ha!',2)); --> "Ha!Ha!"
 - console.log(repeat('Ha!',3)); -->"Ha!Ha!Ha!"

---

## Write a JavaScript function to insert a string within a string at a particular position (default is 1).

- console.log(insert('We are doing some exercises.')); --> "We are doing some exercises."
- console.log(insert('We are doing some exercises.','JavaScript ')); --> "JavaScript We are doing some exercises."
- console.log(insert('We are doing some exercises.','JavaScript ',18)); --> "We are doing some JavaScript exercises."

---

## Write a JavaScript function to humanize number.
Formats a number to a human-readable string, with the correct suffix such as 1st, 2nd, 3rd or 4th.

- console.log(humanize_format()); 
- console.log(humanize_format(1)); --> "1st"
- console.log(humanize_format(8)); --> "8th"
- console.log(humanize_format(301)); --> "301st"
- console.log(humanize_format(402)); --> "402nd"

## Write a JavaScript function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.

- console.log(text_truncate('We are doing JS string exercises.')) --> "We are doing JS string exercises."
- console.log(text_truncate('We are doing JS string exercises.',19)) --> "We are doing JS ..."
- console.log(text_truncate('We are doing JS string exercises.',15,'!!')) --> "We are doing !!"

/* exported isUpperCased */
/* Result = boolean true if all char in word are capitalized; else false.
function with if statement. check if word is strictly equal to the word capitalized.
return true if it is strictly equal; else return false */

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

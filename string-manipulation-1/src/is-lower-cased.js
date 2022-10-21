/* exported isLowerCased */
/* Result = boolean true if all char in word are lowercased; else false.
function with if statement. check if word is strictly equal to the word lowercased.
return true if it is strictly equal; else return false */

function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

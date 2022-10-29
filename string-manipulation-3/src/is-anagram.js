/* exported isAnagram */
/*
remove spaces from both strings and assign to new string.
if statement length of new first string has to strictly equal length of second new string.
if true, create for loop to iterate through string two and compare string at index to string.
if false at any point, return false.
if no false, return true.
---- one test failed 0 need to account for repeating letters.
*/

function isAnagram(firstString, secondString) {
  // debugger;
  var newFirstString = firstString.replaceAll(' ', '');
  var newSecondString = secondString.replaceAll(' ', '');
  if (newFirstString.length === newSecondString.length) {
    for (var i = 0; i < newSecondString.length; i++) {
      // if (newSecondString[i] !== newFirstString[i]) {
      if (newFirstString.includes(newSecondString[i]) === false) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

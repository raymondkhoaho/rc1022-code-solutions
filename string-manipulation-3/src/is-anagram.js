/* exported isAnagram */
/*
remove spaces from both strings and assign to new string.
if statement length of new first string has to strictly equal length of second new string.
if true, create for loop to iterate through string two and compare string at index to string.
if false at any point, return false.
if no false, return true.
---- one test failed 0 need to account for repeating letters.
added .toLowerCase() to account for uppercase/lowercased letters.
*/

function isAnagram(firstString, secondString) {
  // debugger;
  var newFirstString = firstString.replaceAll(' ', '').toLowerCase();
  var newSecondString = secondString.replaceAll(' ', '').toLowerCase();
  var splitFirst = newFirstString.split('');
  var sortFirst = splitFirst.sort();
  var joinFirst = sortFirst.join();
  var splitSecond = newSecondString.split('');
  var sortSecond = splitSecond.sort();
  var joinSecond = sortSecond.join();
  if (joinFirst === joinSecond) {
    return true;
  } else {
    return false;
  }
}

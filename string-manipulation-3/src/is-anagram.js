/* exported isAnagram */
/*
remove spaces from both strings and assign to new string.
split each string to assign to new array
sort array in alphabetical order
join sorted array and assign to new variable.
compare new first string strictly to new second string.
if strictly equal, return true.
else return false.
--- added .toLowerCase() to account for uppercase/lowercased letters.
*/

function isAnagram(firstString, secondString) {
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

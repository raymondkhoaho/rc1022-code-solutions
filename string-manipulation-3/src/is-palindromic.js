/* exported isPalindromic */
/* result = boolean true/false whether or not string is palindromic
edit: need to remove spaces from input string to compare letters only, since spaces take up an index.
  declare variable for new string and use replaceAll method to remove spaces.
compare new string at current index with new string at lastIndex minus current index.
if at any time it is not strictly equal to, return false.
if no false, then return true.
*/

function isPalindromic(string) {
  var newString = string.replaceAll(' ', '');
  var lastIndex = newString.length - 1;
  for (var i = 0; i <= Math.floor(newString.length / 2); i++) {
    if (newString[i] !== newString[(lastIndex - i)]) {
      return false;
    }
  }
  return true;
}

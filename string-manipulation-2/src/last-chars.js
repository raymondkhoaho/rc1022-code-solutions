/* exported lastChars */

/* result = return a string truncated at input length to the last index.
input: -length representing index at which to truncate string
       -string of any length.
slice string at length of string counted from end of string (-length)
create variable to represent lastindex.
need to create if statement to account for cases where length number is more than
length of string.
  -only slice if number length is equal or less than the length of string
  -else just return whole string.
*/

function lastChars(length, string) {
  var lastIndex = string.length;
  if (length <= string.length) {
    return string.slice(-length, lastIndex);
  } else {
    return string;
  }
}

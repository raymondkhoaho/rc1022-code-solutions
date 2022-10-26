/* exported firstChars */
/* result = return a string truncated at input length.
input: -length representing index at which to truncate string
       -string of any length.
same as truncate.js?
slice string at input length
return string
*/

function firstChars(length, string) {
  return string.slice(0, length);
}

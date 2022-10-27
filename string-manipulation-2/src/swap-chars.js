/* exported swapChars */

/* result = swap character at first and second index in any given string.
input: string of any length
extract each section of string:
  string.slice(0, firstIndex) = string from index 0 cut to before firstIndex.
  string.slice(secondIndex, secondIndex + 1) = letter of second index.
  string.slice(firstIndex + 1, secondIndex) = words sliced from after first index to before second index.
  string.slice(firstIndex, firstIndex + 1) = letter of first index.
  string.slice(secondIndex + 1, string.length) = cut from after second index to end of string.
concatenate in correct order and return new string.
*/

function swapChars(firstIndex, secondIndex, string) {
  return string.slice(0, firstIndex) +
  string.slice(secondIndex, secondIndex + 1) +
  string.slice(firstIndex + 1, secondIndex) +
  string.slice(firstIndex, firstIndex + 1) +
  string.slice(secondIndex + 1, string.length);
}

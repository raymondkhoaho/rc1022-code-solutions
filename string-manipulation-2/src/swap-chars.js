/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  return string.slice(0, firstIndex) + string.slice(secondIndex, secondIndex + 1) + string.slice(firstIndex + 1, secondIndex) + string.slice(firstIndex, firstIndex + 1) + string.slice(secondIndex + 1, string.length);

}

/*  newWords[i] = newWords[i][0].toUpperCase() + newWords[i].slice(1).toLowerCase
var newString = string.split('');
  for (var i = 0; i < newString.length; i++) {
      return string.slice(0, (firstIndex + 1)) + string[secondIndex] + string.slice(firstIndex, secondIndex) + string[firstIndex] + string.slice(secondIndex, lastIndex);

string.slice(firstIndex, firstIndex + 1) = letter of first index.
string.slice(secondIndex, secondIndex + 1) = letter of second index.
string.slice(firstIndex + 1, secondIndex) = words spliced.
string.slice(0, firstIndex) - from index 0 cut to firstIndex.
string.slice(secondIndex + 1, string.length) = cut from second index to end of string.
      */

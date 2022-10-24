/* exported capitalizeWords */
/* result = return string with each word capitalized at first index
input: string;
separate each word from string.
capitalize each word at index 0 and concatenate word lowercased, spliced at 1.
add word to new string.
return new string.
*/

/* function capitalizeWords(string) {
  var newString = string.split(' ');
  for (var i = 0; i < newString.length; i++) {
    newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].slice(1).toLowerCase();
    newString = newString.join(' ');
  }
  return newString;
} */

function capitalizeWords(string) {
  var newWords = string.split(' ');
  for (var i = 0; i < newWords.length; i++) {
    newWords[i] = newWords[i][0].toUpperCase() + newWords[i].slice(1).toLowerCase();
  }
  return newWords.join(' ');
}

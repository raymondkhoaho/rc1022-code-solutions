/* exported reverseWords */
/* result = a string with each character in word reversed. words are in original order.
create variable to hold new string.
split input string at each space ' ' and assign to new string.
each word is now an index in array.
iterate through each index with for loop
  for each index (representing one word), split word into characters, reverse index, and join again. concatenate with a space.
  assign to new reversed string. use addition assignment to add word to new string.
return reversed string and trim off white space to account for extra spaces.
*/

function reverseWords(string) {
  var reverseString = '';
  var reverseWord = '';
  var stringArray = string.split(' ');
  for (var i = 0; i < stringArray.length; i++) {
    var splitWord = stringArray[i].split('');
    var lastIndex = stringArray[i].length - 1;
    for (var j = lastIndex; j >= 0; j--) {
      reverseWord += splitWord[j];
    }
  }
  reverseString += reverseWord + ' ';
  return reverseString;
}

/* exported getWords */
/* result = array with each index representing a single word in the string.
input: a string with 0 or more words.
create array for output values
split each word from string (split method) and assign to new variable.
account for if array contains no words (if/else statement)
cycle through each word and push to new array (for loop)
return output */

function getWords(string) {
  var output = [];
  var words = string.split(' ');
  if (string !== '') {
    for (var i = 0; i < words.length; i++) {
      output.push(words[i]);
    }
    return output;
  } else {
    return [];
  }
}

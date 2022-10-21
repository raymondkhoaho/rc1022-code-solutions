/* exported reverseWord */
/* result = string containing reversed word.
return output.
input: single word.
create variable to store new reversed word.
loop through string in reverse order from last index to first index.
  last index = word.length - 1.
  condition expression: index is greater than or equal to 0 (first index);
  final expression: decrement i.
each time loop iterates, add letter to previous letter (addition assignment)
return the new reversed word. */

function reverseWord(word) {
  var wordReversed = '';
  for (var i = (word.length - 1); i >= 0; i--) {
    wordReversed += word[i];
  }
  return wordReversed;
}

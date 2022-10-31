/* exported capitalizeWord */
/* result = return word with first character capitalized, except javascript always returns
JavaScript.
input: single word
create if statement and convert word to lowercased. if word equals javascript, return the
string 'JavaScript'.
if not, run statement to capitalize first letter concatenated with rest of word lowercased.
*/

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
}

/* exported capitalize */
/* Result = uppercase first character of word.
input: a single word.
create function that accesses first character of word.
capitalize first character.
concatenate rest of word lowercased and splice first character.
return from function */

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

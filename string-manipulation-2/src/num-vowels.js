/* exported numVowels */

/* result = count number of vowels in a string and return count.
input: string
create a function with a for loop
WITHIN function, create a variable to keep a count for vowels
  for loop should start at index 0
  condition: check if index is less than string.length
  final expression: increment index by 1 to go to next letter.
create if statement
  if value at index = any vowel, increase count of vowel
  else do not increase count of vowel
return count of vowel. */

function numVowels(string) {
  var vowelCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i' ||
      string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u') {
      vowelCount++;
    }
  }
  return vowelCount;
}

/* exported ransomCase */
/* result = string with every other character capitalized (every odd index?)
input: a string;
return every even index lower cased concatenated with every odd index uppercased.
create new variable to store new string.
cycle through each index with for loop.
if i is even, add value of i lowercased to new string.
else add i uppercased to string.
return new string.
*/

function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
}

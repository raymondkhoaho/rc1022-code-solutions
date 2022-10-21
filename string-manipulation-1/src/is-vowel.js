/* exported isVowel */
/* Result = check if single character is equal to a vowel for both uppercase/lowercase.
input: single string character
function with if statement. change character to lowercase.
check if char is strictly equal to vowels (a, e, i, o, u). if any are true, return true,
else return false. separate each check with OR statement */

function isVowel(char) {
  if (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' ||
    char.toLowerCase() === 'o' || char.toLowerCase() === 'u') {
    return true;
  } else {
    return false;
  }
}

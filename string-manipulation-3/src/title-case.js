/* exported titleCase */
/*
define function
declare new variable for final newTitle
split string into individual words and assign to new variable (new array of words)
for loop to go through split string and check following conditions:
if string at index has colon (:) then uppercase current string and uppercase next index string
    - special case if index has colon but preceded by string 'javascript', then return JavaScript.
  skip next index with i++ within conditional.
if string has hyphen (-) split that word and capitalize each split word and join back together with hyphen.
if not first word, make sure to keep minor words lowercased (in, for, the, of, etc.)
if string at index equals api, always return API.
if string at index equals javascript, always return JavaScript
lastly if none of the other conditions are true, return word with first letter uppercased.
return new title and trim white spaces.
*/

function titleCase(title) {
  var newTitle = '';
  var splitTitle = title.split(' ');
  for (var i = 0; i < splitTitle.length; i++) {
    if (splitTitle[i].includes(':')) {
      if (splitTitle[i].toLowerCase() === 'javascript:') {
        newTitle += 'JavaScript:' + ' ' + splitTitle[i + 1][0].toUpperCase() + splitTitle[i + 1].slice(1).toLowerCase() + ' ';
      } else {
        newTitle += splitTitle[i][0].toUpperCase() + splitTitle[i].slice(1).toLowerCase() + ' ' + splitTitle[i + 1][0].toUpperCase() + splitTitle[i + 1].slice(1).toLowerCase() + ' ';
      }
      i++;
    } else if (splitTitle[i].includes('-')) {
      var dashedWord = splitTitle[i].split('-');
      newTitle += dashedWord[0][0].toUpperCase() + dashedWord[0].slice(1).toLowerCase() + '-' + dashedWord[1][0].toUpperCase() + dashedWord[1].slice(1).toLowerCase() + ' ';
    } else if (i !== 0 && (splitTitle[i].toLowerCase() === 'in' || splitTitle[i].toLowerCase() === 'for' || splitTitle[i].toLowerCase() === 'the' || splitTitle[i].toLowerCase() === 'of' || splitTitle[i].toLowerCase() === 'and' || splitTitle[i].toLowerCase() === 'to' || splitTitle[i].toLowerCase() === 'on')) {
      newTitle += splitTitle[i].toLowerCase() + ' ';
    } else if (splitTitle[i].toLowerCase() === 'api') {
      newTitle += 'API' + ' ';
    } else if (splitTitle[i].toLowerCase() === 'javascript') {
      newTitle += 'JavaScript' + ' ';
    } else {
      newTitle += splitTitle[i][0].toUpperCase() + splitTitle[i].slice(1).toLowerCase() + ' ';
    }
  }
  return newTitle.trim();
}

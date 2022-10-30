/* exported titleCase */
/*
define function
split string into individual words and assign to new variable (new array of words)
*/

function titleCase(title) {
// debugger;
  var newTitle = '';
  var splitTitle = title.split(' ');
  for (var i = 0; i < splitTitle.length; i++) {
    if (i !== 0 && (splitTitle[i].toLowerCase() === 'in' || splitTitle[i].toLowerCase() === 'for' || splitTitle[i].toLowerCase() === 'the' || splitTitle[i].toLowerCase() === 'of' || splitTitle[i].toLowerCase() === 'and' || splitTitle[i].toLowerCase() === 'to' || splitTitle[i].toLowerCase() === 'on')) {
      newTitle += splitTitle[i].toLowerCase() + ' ';
    } else if (splitTitle[i].toLowerCase() === 'api') {
      newTitle += 'API' + ' ';
    } else if (splitTitle[i].toLowerCase() === 'javascript') {
      newTitle += 'JavaScript' + ' ';
    } else if (splitTitle[i].toLowerCase() === 'javascript:') {
      newTitle += 'JavaScript:' + ' ';
    } else {
      newTitle += splitTitle[i][0].toUpperCase() + splitTitle[i].slice(1).toLowerCase() + ' ';
    }
  }
  return newTitle.trim();
}

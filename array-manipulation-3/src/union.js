/* exported union */
/* result = new array with unique values from first and second in order
input: first array and second array
define function union(first, second)
for loop for first array
push each index value of first array to new array.
for loop through second array.
if first array does not include second array at index, push second array to new array
return new array
*/

function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    if (first.includes(second[j]) === false) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}

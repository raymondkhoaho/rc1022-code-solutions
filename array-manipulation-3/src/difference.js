/* exported difference */
/* result = new array. only unique elements.
input: first array and second array
declare variable for new empty array
for loop for first array
if statement. if second array does not include first array at index, push first array at index to new array.
for loop for second array
if statement. if first array does not include second array at index, push second array at index to new array.
return new array
*/

function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === false) {
      newArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.includes(second[j]) === false) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}

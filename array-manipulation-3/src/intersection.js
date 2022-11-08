/* exported intersection */
/* result = new array containing value found in both first and second array.
input: first array and second array.
for loop for first array length only needed since value has to be present in both arrays.
if statement. if second array includes first array at current index, push current index to new array.
return new array.
*/

function intersection(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === true) {
      newArray.push(first[i]);
    }
  }
  return newArray;
}

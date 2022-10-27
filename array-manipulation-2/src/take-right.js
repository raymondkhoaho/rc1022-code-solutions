/* exported takeRight */
/* result = new array including only "count" items starting from end of array
input: array of string and count of # of elements to take, starting at end of array
define new function take(array, count)
declare new variable for an empty array
if statement to run code only if the count is less than length of array. else return an empty array.
for statement to iterate through array until count starting from end of array (lastIndex)
  initialization: start i at array.length
  condition: stop at count
  final: increment index by one
push each array value at index that meets condition to new array.
return new array.
*/

function takeRight(array, count) {
  var output = [];
  if (count <= array.length) {
    for (var i = (array.length - count); i < array.length; i++) {
      output.push(array[i]);
    }
  }
  return output;
}

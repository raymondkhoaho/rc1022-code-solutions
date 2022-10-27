/* exported takeRight */
/* result = new array including only "count" items starting from end of array, but index still in increasing order.
input: array of string and count of # of elements to take, starting at end of array
define new function take(array, count)
declare new variable for an empty array
if statement to run code only if the count is less than length of array.
  for statement to iterate through array starting at the end of array minus count
    initialization: start i at array.length minus count
    condition: stop at end of array length
    final: increment index by one
      -push each array value at index that meets condition to new array.
      -return new array.
else if statement if count is greater than array --> return original array.
else if empty array input, return an empty array.
*/

function takeRight(array, count) {
  var output = [];
  if (count < array.length) {
    for (var i = (array.length - count); i < array.length; i++) {
      output.push(array[i]);
    }
    return output;
  } else if (count >= array.length) {
    return array;
  } else {
    return output;
  }
}

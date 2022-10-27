/* exported dropRight */

/* result = new array dropping count # of elements from end of list
input: array of string and count of # of elements to drop, starting at end of array
define new function take(array, count)
declare new variable for an empty array
if statement to run code only if the count is less than length of array.
  for statement to iterate through array starting at the end of array minus count
    initialization: start i = 0
    condition: stop at end of array length minus the count.
    final: increment index by one
      -push each array value at index that meets condition to new array.
      -return new array.
else if empty array input or if count is greater than array, return an empty array.
*/

function dropRight(array, count) {
  var output = [];
  if (count < array.length) {
    for (var i = 0; i < (array.length - count); i++) {
      output.push(array[i]);
    }
    return output;
  } else {
    return output;
  }
}

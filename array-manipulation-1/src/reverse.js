/* exported reverse */
/* result = new array containing input array in reverse order.
input: array
create variable for a new empty array;
loop through array in reverse order from last index (length of array minus 1) to
first index (array at 0).
  initialization: lastIndex
  condition: stop when index reaches first index (0)
  final expression: decrement index by one.
push each value to new array.
return new array. */

function reverse(array) {
  var output = [];
  var lastIndex = array.length - 1;
  for (var i = lastIndex; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

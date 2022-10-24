/* exported compact */
/* result = a new array that omits all falsy values.
input: array
create variable to store new array
loop through array from first index to last index (length of array - 1)
  initialization: index 0
  condition: stop when it reaches last index (length of array - 1)
  final expression: increment index by one.
if value at index is a truthy, then push to new array.
return new array */

function compact(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      output.push(array[i]);
    }
  }
  return output;
}

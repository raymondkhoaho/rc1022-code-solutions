/* exported initial */
/* result = new array with all elements except last element (last index)
input: array
create variable for new empty array.
loop through each index starting at first element (first index 0) up to but not
including last element of array (last index)
  initialization at 0
  condition stop before last element of array (last index = length of array - 1)
  final expression: increment i by one.
push each iteration to new array.
return new array. */

function initial(array) {
  var output = [];
  for (var i = 0; i < (array.length - 1); i++) {
    output.push(array[i]);
  }
  return output;
}

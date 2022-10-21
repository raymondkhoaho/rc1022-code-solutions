/* exported tail */
/* result = new array with all but first element
input: array
create variable for a new empty array.
loop through array starting at index 1 to exclude index 0.
  initialization at 1.
  condition of index less than length of array.
  increment i by one.
push each value to new array.
return new array */

function tail(array) {
  var output = [];
  for (var i = 1; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}

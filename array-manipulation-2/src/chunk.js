/* exported chunk */
/* result = new array that has sub arrays with length equal to size input.
input: array, number of size for desired chunk size.
create variable for new array
iterate through array with a for loop
  initialization: start index at 0.
  condition: index less than length of array.
  final: increment by number of input size and add back to i. (i += size or i = i + size)
in code block slice at current index up to that index plus the size and push into new array.
if i + size is greater than the length left, per MDN the slice extracts through the end of the sequence.
return new array.
*/
function chunk(array, size) {
  var output = [];
  for (var i = 0; i < array.length; i += size) {
    output.push(array.slice(i, (i + size)));
  }
  return output;
}

/* exported take */
/* result = new array including only "count" items
input: array of string and count of # of elements to take, starting at beginning of array
define new function take(array, count)
declare new variable for an empty array
if statement to run code only if the count is less than length of array. else return an empty array.
for statement to iterate through array up until "count"
  initialization: start i at 0
  condition: stop at count
  final: increment index by one
push each array value at index that meets condition to new array.
return new array.
*/
function take(array, count) {
  var output = [];
  if (count <= array.length) {
    for (var i = 0; i < count; i++) {
      output.push(array[i]);
    }
  }
  return output;
}

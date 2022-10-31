/* exported drop */
/* result = new array including items after "count"
input: array of string and count of # of elements to drop from beginning of array.
define new function drop(array, count)
declare new variable for an empty array
if statement to run code only if the count is less than length of array. else return an empty array.
for statement to iterate through array up until "count"
  initialization: start i at "count"
  condition: stop i before length of array
  final: increment index by one
push each array value at index that meets condition to new array.
return new array.
*/
function drop(array, count) {
  var output = [];
  if (count < array.length) {
    for (var i = count; i < array.length; i++) {
      output.push(array[i]);
    }
  }
  return output;
}

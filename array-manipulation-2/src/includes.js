/* exported includes */
/* result = return true if value is found in array, false if not.
input: array, value to search for
for loop to iterate through array
if at any index, value of array is equal to value of input, then run statement and return boolean true.
if loop ends without finding match, return false.
*/
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

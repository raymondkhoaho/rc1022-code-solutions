/* exported flatten */
/* result = new array with one level of unwrap
define function flatten(array)
declare variable to hold new array.
loop through input array and assign each index value to a variable.
if current index is an array, create for loop for array and push values of array into new empty array.
if current index is not an array, push that value to new empty array.
return new array.
*/

function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var arrayOne = array[i];
    if (Array.isArray(arrayOne)) {
      for (var j = 0; j < arrayOne.length; j++) {
        newArray.push(arrayOne[j]);
      }
    } else {
      newArray.push(arrayOne);
    }
  }
  return newArray;
}

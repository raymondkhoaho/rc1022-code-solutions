/* exported unique */
/* result = new array with only unique elements in order they appear.
input: one parameter. an array.
define function unique(array)
declare variable to hold new empty array.
create for loop to iterate through input array.
create conditional statement and compare if current new array includes value of current index.
if it does not, push value of current index to new array.
if it does, do nothing and continue loop.
return new array.
*/

function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (newArray.includes(array[i]) === false) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

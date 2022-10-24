/* exported getKeys */
/* result = array with property keys of object.
input: one parameter object.
create variable for new empty array.
create function with for...in loop to cycle through object and push key of object to new array.
return new array.
*/

function getKeys(object) {
  var output = [];
  for (var key in object) {
    output.push(key);
  }
  return output;
}

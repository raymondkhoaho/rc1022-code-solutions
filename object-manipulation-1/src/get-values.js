/* exported getValues */
/* result = array with values of property keys of object.
input: one parameter object.
create variable for new empty array.
create function with for...in loop to cycle through object and push value of key of object to new array.
return new array.
*/

function getValues(object) {
  var output = [];
  for (var keys in object) {
    output.push(object[keys]);
  }
  return output;
}

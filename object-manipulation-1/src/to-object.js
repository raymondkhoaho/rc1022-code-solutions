/* exported toObject */
/* result = object that pairs key value with property value.
input: array with 2 values
create variable for new empty object.
update empty object by adding first index array(index 0) equaling to
second index of array (index 1).
return new object.
*/

function toObject(keyValuePair) {
  var output = {};
  output[keyValuePair[0]] = keyValuePair[1];
  return output;
}

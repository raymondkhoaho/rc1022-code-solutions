/* exported invert */
/* result = new object with property as value and value as property;
input: source (object)
define function;
create variable for new empty object;
iterate through object with for...in loop
assign key/value pair to new object object[key] = value, where key represents old objects value
  and value represents old objects property.
return new object.
*/

function invert(source) {
  var output = {};
  for (var keys in source) {
    output[source[keys]] = keys;
  }
  return output;
}

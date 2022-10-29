/* exported pick */
/* result = create object that only includes picked source properties
input: source (an object) and keys (an array of strings)
create variable for new empty object
for loop to iterate through keys input array
if keys input at index (keys[i]) equals source,
assign source[i] to new object.
*/

function pick(source, keys) {
  var output = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      if (keys[i] in source) {
        output[keys[i]] = source[keys[i]];
      }
    }
  }
  return output;
}

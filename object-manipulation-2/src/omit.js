/* exported omit */
/* result = new object with properties from source not listed in keys.
input: source (object) and keys (array of strings to exclude);
define function omit with two parameters source and keys;
create variable and copy source object to variable via Object.assign();
if input keys at index are in copied object (output), delete that key/value pair;
return output
*/

function omit(source, keys) {
  var output = Object.assign({}, source);
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] in output) {
      delete output[keys[i]];
    }
  }
  return output;
}

// working function but do not use ----
// function omit(source, keys) {
//   var output = {};
//   var excludeKeys = new Set(keys);
//   var filteredKeys = Object.entries(source).filter(([key]) => !excludeKeys.has(key));
//   output = Object.fromEntries(filteredKeys);
//   return output;
// }

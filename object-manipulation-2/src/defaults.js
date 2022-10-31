/* exported defaults */
/* result = assign source object key/value pair to target object if not already in target.
go through keys in source object
see if key property of source object is in target object. if in target property, invert statement from true to false,
now meaning the keys of source are not in target object
assign these key/value pair of source to target object.
*/

function defaults(target, source) {
  for (var keys in source) {
    if (keys in target === false) {
      target[keys] = source[keys];
    }
  }
}

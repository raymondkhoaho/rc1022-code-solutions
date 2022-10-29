/* exported defaults */
/* result = assign source object key/value pair to target object if not already in target.
go through source and see if key property is in target object.
if not in target object, then assign key/value pair of source to target object.
*/

function defaults(target, source) {
// debugger;
  for (var keys in source) {
    if (keys in target === false) {
      target[keys] = source[keys];
    }
  }
}

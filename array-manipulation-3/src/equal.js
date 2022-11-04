/* exported equal */
/* result = compare first array to second array and return true/false if they're equal or not.
create for loop to go through each index. since we're comparing if arrays are identical at each index
compare first array length to second array length. only if equal run step below. else return false.
one for loop should work to iterate through both arrays.
  initialization: i = 0
  condition: i < first.length OR second.length (should not matter)
  final expression: increment i by one.
for each index, check if at any point first[i] does not strictly equal second[i]
  return false if this happens
otherwise, they are identical --> return true.
*/

function equal(first, second) {
  if (first.length === second.length) {
    for (var i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

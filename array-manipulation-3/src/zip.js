/* exported zip */
/*
define function zip(first, second)
declare new variable to hold new empty array.
compare first array length to second array length. if first <= second, run first for loop
else run second for loop (where second array is shorter)
in each for loop, iterate through index and pair each value of index of first array
with value of index of second array. assign to new variable to hold pair
push paired array to new empty array.
return new array
*/

function zip(first, second) {
  var newArray = [];
  if (first.length <= second.length) {
    for (var i = 0; i < first.length; i++) {
      var pairedArray = [first[i], second[i]];
      newArray.push(pairedArray);
    }
  } else {
    for (var j = 0; j < second.length; j++) {
      var pairedArray2 = [first[j], second[j]];
      newArray.push(pairedArray2);
    }
  }
  return newArray;
}

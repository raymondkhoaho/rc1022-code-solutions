/* exported countdown */
function countdown(numbers) {
  var array = [];
  for (var i = numbers; i >= 0; i--) {
    array.push(i);
  }
  return array;
}

/* exported getLength */

function getLength(list) {
  let length = 0;
  while (list.next !== null) {
    length++;
  }
  return length;
}

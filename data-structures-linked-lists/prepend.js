/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const prependList = new LinkedList(value);
  prependList.next = list;
  return prependList;
}

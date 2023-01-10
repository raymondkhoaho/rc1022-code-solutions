/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const secondData = list.next;
  const insertList = new LinkedList(value);
  list.next = insertList;
  list.next.next = secondData;
  return list;
}

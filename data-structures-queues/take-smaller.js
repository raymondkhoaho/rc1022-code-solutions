/* exported takeSmaller */

function takeSmaller(queue) {
  const first = queue.dequeue();
  if (queue.peek() === undefined) return first;
  const second = queue.dequeue();
  if (second !== undefined) {
    if (second > first) {
      queue.enqueue(second);
      return first;
    } else {
      queue.enqueue(first);
      return second;
    }
  }
}

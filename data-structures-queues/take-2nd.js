/* exported take2nd */

function take2nd(queue) {
  const front = queue.dequeue();
  const second = queue.dequeue();
  if (second !== undefined) {
    queue.enqueue(front);
    return second;
  } else {
    return front;
  }
}

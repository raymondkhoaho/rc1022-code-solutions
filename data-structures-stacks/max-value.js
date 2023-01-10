/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    let max = stack.peek();
    while (stack.peek() !== undefined) {
      if (stack.peek() > max) {
        max = stack.peek();
      }
      stack.pop();
    }
    return max;
  }
}

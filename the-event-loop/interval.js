let currentCount = 3;
const intervalID = setInterval(countdown, 1000);

function countdown() {
  if (currentCount > 0) {
    console.log(currentCount);
    currentCount--;
  } else {
    clearInterval(intervalID);
    console.log('Blast off!');
  }
}

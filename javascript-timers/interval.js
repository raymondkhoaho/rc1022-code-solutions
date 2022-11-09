var $countdownText = document.querySelector('.countdown-display');
var intervalID = setInterval(countdown, 1000);
var count = 4;

function countdown() {
  if (count < 0) {
    clearInterval(intervalID);
    $countdownText.textContent = '~Earth Beeeeellllooowwwww Us~';
  } else {
    $countdownText.textContent = count;
    count--;
  }
}

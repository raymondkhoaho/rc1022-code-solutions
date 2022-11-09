var $countdownText = document.querySelector('.countdown-display');
var intervalID = setInterval(countdown, 1000);

function countdown() {
  if ($countdownText.textContent === '0') {
    clearInterval(intervalID);
    $countdownText.textContent = '~Earth Beeeeellllooowwwww Us~';
  } else {
    $countdownText.textContent -= intervalID;
  }
}

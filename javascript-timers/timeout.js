var $h2Text = document.querySelector('.message');

function switchMessage() {
  $h2Text.textContent = 'Hello There';
}

setTimeout(switchMessage, 2000);

function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name', event.target.name);
  console.log('value of name:', event.target.value);
}

var $nameControl = document.querySelector('#user-name');
var $emailControl = document.querySelector('#user-email');
var $messageControl = document.querySelector('#user-message');

$nameControl.addEventListener('focus', handleFocus);
$nameControl.addEventListener('blur', handleBlur);
$nameControl.addEventListener('input', handleInput);

$emailControl.addEventListener('focus', handleFocus);
$emailControl.addEventListener('blur', handleBlur);
$emailControl.addEventListener('input', handleInput);

$messageControl.addEventListener('focus', handleFocus);
$messageControl.addEventListener('blur', handleBlur);
$messageControl.addEventListener('input', handleInput);

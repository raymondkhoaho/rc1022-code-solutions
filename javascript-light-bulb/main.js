/* result = light bulb that will turn on and off with each click
Need a click counter that switches between statement being true or false with each click.
declare variable for click button.
DOM query light bulb and assign to variable
DOM query background and assign to variable
addEventListener for click to invoke function
use logical NOT operator to toggle between true and false and return the result
if true = switch className to yellow bulb/background
if false = switch className to black bulb/background
*/

var clickTrueOrFalse = null;
var $lightBulb = document.querySelector('.light-bulb');
var $backgroundColor = document.querySelector('.background-yellow');

function clickOnAndOff(event) {
  clickTrueOrFalse = !clickTrueOrFalse;
  if (clickTrueOrFalse === true) {
    $lightBulb.className = 'light-bulb yellow';
    $backgroundColor.className = 'background-yellow';
  } else {
    $lightBulb.className = 'light-bulb black';
    $backgroundColor.className = 'background-black';
  }
}

$lightBulb.addEventListener('click', clickOnAndOff);

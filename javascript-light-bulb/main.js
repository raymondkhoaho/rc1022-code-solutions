/* result = light bulb that will turn on and off with each click
Need a click counter that switches between statement being true or false with each click.
  - could create if statement that compares click count to even/odd
  -if even (divisible by two) then light bulb yellow with background yellow
  -if odd (remainder) then light bulb yellow with black background
declare variable to keep count of clicks and set it to null
DOM query light bulb and assign to variable
DOM query background and assign to variable
addEventListener for click to invoke function
function should increment click count witch each click (i++)
if even = switch className to yellow bulb/background
if odd = switch className to black bulb/background
*/

var clickEvenOrOdd = null;
var $lightBulb = document.querySelector('.light-bulb');
var $backgroundColor = document.querySelector('.background-yellow');

function clickOnAndOff(event) {
  clickEvenOrOdd++;

  if (clickEvenOrOdd % 2 === 0) {
    $lightBulb.className = 'light-bulb yellow';
    $backgroundColor.className = 'background-yellow';
  } else {
    $lightBulb.className = 'light-bulb black';
    $backgroundColor.className = 'background-black';
  }
}

$lightBulb.addEventListener('click', clickOnAndOff);

/* result = each click on hot button increases count (change text of click-count class in paragraph)
each time a click count reaches a certain threshold, we want button color to change
(change class of .hot-button.cold from cold --> cool --> tepid --> warm --> hot --> nuclear)

create addeventlistener for button for a click event.
create variable to store number of times button has been clicked.
create new variable for DOM query for hot-button class.
create new variable for DOM query for click-count class
increment click count in function by using i++.
create conditionals for number of clicks and change class name of the hot button
based on number of clicks.
*/

var clickCounter = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function updateClickCount(event) {
  clickCounter++;
  $clickCount.textContent = 'Clicks: ' + clickCounter;

  if (clickCounter < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clickCounter < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clickCounter < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickCounter < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clickCounter < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', updateClickCount);

/* result = typing tutor application that will respond to key input and compare to
string and see if it matches letter.
Put each character in a span in HTML. DOM query ALL span elements.
querySelectorAll results in a NodeList. access NodeList via console.dir. NodeList is array-like object.
NodeList will have each span (equaling each character) to an index number.
create addEventListener to document object with type keydown.
function should have variable equaling to text content of span item at index.
start index count at 0 and assign to variable.
if statement comparing event.key (which returns printed representation of key pressed) to textContent at span item at index.
if statement it strictly equals
   - add class name correct to span item. (green text color)
   - increment index count by one.
   - add current class to incremented index (black underline)
if statement does not strictly equal
   - add class name incorrect to span item (red text color/red underline)
 */

var $allSpan = document.querySelectorAll('span');
var i = 0;

function typeTutor(event) {
  var item = $allSpan[i].textContent;
  if (event.key === item) {
    $allSpan[i].className = 'correct';
    i++;
    $allSpan[i].className = 'current';
  } else {
    $allSpan[i].className = 'incorrect';
  }
}

document.addEventListener('keydown', typeTutor);

/* CODE IN PROGRESS

function clickCount(event) {
  charCount++;
  console.log(charCount);
}

var charCount = 0;

var $countText = document.querySelector('.count');

var lastIndex = $allSpan.length - 1;

function accuracyPercentage(lastIndex) {
  if (i === lastIndex) {
    $countText.textContent = '';
  }
}
accuracyPercentage(i);

document.addEventListener('keydown', clickCount); */

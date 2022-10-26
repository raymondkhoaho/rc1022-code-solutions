/* */

var $allSpan = document.querySelectorAll('span');
// var charCount = 0;
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

function clickCount(event) {
//  charCount++;
// console.log(charCount);
}

/*

var $countText = document.querySelector('.count');

var lastIndex = $allSpan.length - 1;

function accuracyPercentage(lastIndex) {
  if (i === lastIndex) {
    $countText.textContent = 'Hello';
  }
}
accuracyPercentage(i); */

document.addEventListener('keydown', typeTutor);
document.addEventListener('keydown', clickCount);

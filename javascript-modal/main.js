/* result = have a dialog box that opens and closes via open and close button.
when dialog box is open, backdrop should be visible through overlay.
utilize display: none to initially hide overlay and modal box.
create variable for open button and DOM query it.
create variable for close button and DOM query it.
create variable for overlay and DOM query it.
create variable for modal dialog box and DOM query it.
addEventListener for open button that changes class names accordingly to show overlay and modal box.
addEventListener for close button that changes class name to display: none.
*/

var $openButton = document.querySelector('.open-button');
var $closeButton = document.querySelector('.close-button');
var $overlay = document.querySelector('.overlay');
var $modal = document.querySelector('.modal');

function openModal(event) {
  $modal.className = 'modal';
  $overlay.className = 'overlay';
}

$openButton.addEventListener('click', openModal);
function closeModal(event) {
  $modal.className = 'hidden';
  $overlay.className = 'hidden';
}

$closeButton.addEventListener('click', closeModal);

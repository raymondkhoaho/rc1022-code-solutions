var $forwardButton = document.querySelector('.forward-button');
var $backwardButton = document.querySelector('.backward-button');
var $image = document.querySelector('.main-image');
// var $progressButton = document.querySelectorAll('.progress-button');

$forwardButton.addEventListener('click', forwardFunction);
$backwardButton.addEventListener('click', backwardFunction);

var imagesArray = [
  {
    imageUrl: 'images/001.png'
  },
  {
    imageUrl: 'images/004.png'
  },
  {
    imageUrl: 'images/007.png'
  },
  {
    imageUrl: 'images/025.png'
  },
  {
    imageUrl: 'images/039.png'
  }
];

var imgCounter = 0;
function forwardFunction(event) {
  if (imgCounter > imagesArray.length - 2) {
    imgCounter = 0;
    $image.setAttribute('src', imagesArray[imgCounter].imageUrl);
  } else {
    imgCounter++;
    $image.setAttribute('src', imagesArray[imgCounter].imageUrl);
  }

}

function backwardFunction(event) {
  if (imgCounter < 1) {
    imgCounter = 4;
    $image.setAttribute('src', imagesArray[imgCounter].imageUrl);
  } else {
    imgCounter--;
    $image.setAttribute('src', imagesArray[imgCounter].imageUrl);
  }
}

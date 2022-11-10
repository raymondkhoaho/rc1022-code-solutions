var $forwardButton = document.querySelector('.forward-button');
var $backwardButton = document.querySelector('.backward-button');
var $image = document.querySelector('.main-image');
var $allCircle = document.querySelectorAll('.fa-circle');
var $progressBar = document.querySelector('.progress-indicator');
var intervalID = setInterval(forwardFunction, 3000);
var imgCounter = 0;

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

function forwardFunction(event) {
  if (imgCounter > imagesArray.length - 2) {
    $allCircle[imgCounter].setAttribute('class', 'fa-regular fa-circle');
    imgCounter = 0;
    $allCircle[imgCounter].setAttribute('class', 'fa-solid fa-circle');
    $image.setAttribute('src', imagesArray[imgCounter].imageUrl);
  } else {
    $allCircle[imgCounter].setAttribute('class', 'fa-regular fa-circle');
    imgCounter++;
    $allCircle[imgCounter].setAttribute('class', 'fa-solid fa-circle');
    $image.setAttribute('src', imagesArray[imgCounter].imageUrl);
  }
  clearInterval(intervalID);
  intervalID = setInterval(forwardFunction, 3000);
}

$forwardButton.addEventListener('click', forwardFunction);

function backwardFunction(event) {
  if (imgCounter < 1) {
    $allCircle[imgCounter].setAttribute('class', 'fa-regular fa-circle');
    imgCounter = 4;
    $allCircle[imgCounter].setAttribute('class', 'fa-solid fa-circle');
    $image.setAttribute('src', imagesArray[imgCounter].imageUrl);
  } else {
    $allCircle[imgCounter].setAttribute('class', 'fa-regular fa-circle');
    imgCounter--;
    $allCircle[imgCounter].setAttribute('class', 'fa-solid fa-circle');
    $image.setAttribute('src', imagesArray[imgCounter].imageUrl);
  }
  clearInterval(intervalID);
  intervalID = setInterval(forwardFunction, 3000);
}

$backwardButton.addEventListener('click', backwardFunction);

function progressFunction(event) {
  if (event.target.tagName === 'I') {
    var currentCount = event.target.getAttribute('data-image-index');
    $allCircle[imgCounter].setAttribute('class', 'fa-regular fa-circle');
    imgCounter = currentCount;
    $allCircle[imgCounter].setAttribute('class', 'fa-solid fa-circle');
    $image.setAttribute('src', imagesArray[imgCounter].imageUrl);
  }
  clearInterval(intervalID);
  intervalID = setInterval(forwardFunction, 3000);
}

$progressBar.addEventListener('click', progressFunction);

var $tabContainer = document.querySelector('.tab-container');
var $tabNodeList = document.querySelectorAll('.tab');
var $viewNodeList = document.querySelectorAll('.view');

function clickFunction(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabNodeList.length; i++) {
      if ($tabNodeList[i] === event.target) {
        $tabNodeList[i].setAttribute('class', 'tab active');
      } else {
        $tabNodeList[i].setAttribute('class', 'tab');
      }
      var $dataView = event.target.getAttribute('data-view');
      for (var j = 0; j < $viewNodeList.length; j++) {
        if ($viewNodeList[j].getAttribute('data-view') === $dataView) {
          $viewNodeList[j].setAttribute('class', 'view');
        } else {
          $viewNodeList[j].setAttribute('class', 'view hidden');
        }
      }
    }
  }
}

$tabContainer.addEventListener('click', clickFunction);

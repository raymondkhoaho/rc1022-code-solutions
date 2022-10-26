var $contactControl = document.querySelector('#contact-form');
$contactControl.addEventListener('submit', submitEvent);

function submitEvent(event) {
  var formObject = {};
  event.preventDefault();
  formObject.name = $contactControl.elements.name.value;
  formObject.email = $contactControl.elements.email.value;
  formObject.message = $contactControl.elements.message.value;
  console.log('messageData:', formObject);
  $contactControl.reset();
}

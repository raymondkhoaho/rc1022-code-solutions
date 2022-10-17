var student = {
  firstName: 'Raymond',
  lastName: 'Ho',
  age: 33
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Loan Agent';

console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Maserati',
  model: 'Levante',
  year: 2023
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('value of color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Teddi',
  type: 'Bichon Frise'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);

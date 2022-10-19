var x = 30;
var y = 99;
var z = 87;

var maximumValue = Math.max(x, y, z);
console.log('maximumValue result:', maximumValue);

var heroes = ['Spider-Man', 'Thor', 'Iron Man', 'Hulk'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex result:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero result:', randomHero);

var library = [
  {
    title: 'The Fault in Our Stars',
    author: 'John Green'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins'
  },
  {
    title: 'Divergent',
    author: 'Veronica Roth'
  }
];

var lastBook = library.pop();
console.log('lastBook result:', lastBook);

var firstBook = library.shift();
console.log('firstBook result:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library result:', library);

var fullName = 'Raymond Ho';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName result:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();
console.log('sayMyName result:', sayMyName);

var books = [
  {
    isbn: '978-19387912328',
    title: 'this is book title 1',
    author: 'Jason Script'
  },
  {
    isbn: '888-12312938019',
    title: 'this is book title 3',
    author: 'Java Son'
  },
  {
    isbn: '129-50984098530',
    title: 'this is book title 3',
    author: 'Scripter Json'
  }
];

console.log('books array:', books);
console.log('typeof array:', typeof books);

var stringify = JSON.stringify(books);
console.log('JSON string:', stringify);
console.log('typeof JSON string:', typeof stringify);

var string = '{"id": "21023910239", "name": "Raymond Ho"}';

console.log('JSON string:', string);
console.log('typeof JSON string:', typeof string);

var parse = JSON.parse(string);
console.log('string parse:', parse);
console.log('typeof string parse:', typeof parse);

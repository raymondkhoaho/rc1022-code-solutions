const dataJson = require('./data.json');
const fs = require('fs');
// console.log(dataJson.notes[5]);
// read
if (process.argv[2] === 'read') {
  for (const key in dataJson.notes) {
    console.log(`${key}: ${dataJson.notes[key]}`);
  }
}
// add
if (process.argv[2] === 'create') {
  dataJson.notes[dataJson.nextId] = process.argv[3];
  dataJson.nextId++;
  const data = JSON.stringify(dataJson, null, 2);
  fs.writeFile('data.json', data, err => {
    if (err) throw err;
  });
}
// delete
if (process.argv[2] === 'delete') {
  const index = process.argv[3];
  delete dataJson.notes[index];
  const data = JSON.stringify(dataJson, null, 2);
  fs.writeFile('data.json', data, err => {
    if (err) throw err;
  });
}

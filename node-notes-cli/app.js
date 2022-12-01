const dataJson = require('./data.json');

// read
if (process.argv[2] === 'read') {
  for (const key in dataJson.notes) {
    console.log(`${key}: ${dataJson.notes[key]}`);
  }
}

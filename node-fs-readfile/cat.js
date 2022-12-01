const fs = require('fs');

const i = 2;
function readRecursive(i) {
  if (i < process.argv.length) {
    fs.readFile(process.argv[i], 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
      readRecursive(i);
    });
    i++;
  }
}
readRecursive(i);

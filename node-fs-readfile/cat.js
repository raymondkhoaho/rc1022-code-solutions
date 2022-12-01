const fs = require('fs');

const i = 2;
function recursion(i) {
  if (i < process.argv.length) {
    fs.readFile(process.argv[i], 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
    i++;
    recursion(i);
  }
}
recursion(i);

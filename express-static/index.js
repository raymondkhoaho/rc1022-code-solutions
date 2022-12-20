const express = require('express');
const path = require('path');
const app = express();

const joined = path.join(__dirname, 'public');
console.log(joined);

app.use(express.static(joined));

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});

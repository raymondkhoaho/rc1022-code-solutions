var express = require('express');
const dataJson = require('./data.json');
var app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.use(express());

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const key in dataJson.notes) {
    notesArray.push(dataJson.notes[key]);
  }
  res.json(notesArray);
});

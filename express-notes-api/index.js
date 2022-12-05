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

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (dataJson.notes[id]) {
    res.status(200).send(dataJson.notes[id]);
  } else {
    res.status(404).send({ error: 'cannot find note with id 13' });
  }
});

var express = require('express');
const dataJson = require('./data.json');
const fs = require('fs');
var app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.use(express.json());

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

app.post('/api/notes', (req, res) => {
  const newEntry = req.body;
  if (!('content' in newEntry)) {
    res.status(404).send({ error: 'content is a required field' });
  } else if ('content' in newEntry) {
    newEntry.id = dataJson.nextId;
    dataJson.notes[dataJson.nextId] = newEntry;
    dataJson.nextId++;
    const data = JSON.stringify(dataJson, null, 2);
    fs.writeFile('data.json', data, err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error occurred.' });
        process.exit(1);
      }
      res.status(201).json(newEntry);
    });
  }
});

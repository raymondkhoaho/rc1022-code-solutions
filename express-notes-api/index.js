var express = require('express');
const dataJson = require('./data.json');
const fs = require('fs');
var app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.use(express.json());

// Client can GET list of notes
app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const key in dataJson.notes) {
    notesArray.push(dataJson.notes[key]);
  }
  res.json(notesArray);
});

// Client can GET notes by specific id
app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (dataJson.notes[id]) {
    res.status(200).json(dataJson.notes[id]);
  } else {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  }
});

// Client can POST new note
app.post('/api/notes', (req, res) => {
  const newEntry = req.body;
  if (!('content' in newEntry)) {
    res.status(404).json({ error: 'content is a required field' });
  } else if ('content' in newEntry) {
    newEntry.id = dataJson.nextId;
    dataJson.notes[dataJson.nextId] = newEntry;
    dataJson.nextId++;
    const data = JSON.stringify(dataJson, null, 2);
    fs.writeFile('data.json', data, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
        process.exit(1);
      }
      res.status(201).json(newEntry);
    });
  }
});

// Client can DELETE note by id
app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (Number.isInteger(id) && !(id in dataJson.notes)) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else if (id in dataJson.notes) {
    delete dataJson.notes[id];
    const data = JSON.stringify(dataJson, null, 2);
    fs.writeFile('data.json', data, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
        process.exit(1);
      }
      res.status(204).json();
    });
  }
});

// Client can PUT (update) by specific id

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const updateEntry = req.body;
  if (!Number.isInteger(id)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!('content' in updateEntry)) {
    res.status(400).json({ error: 'content is a required field' });
  }
});

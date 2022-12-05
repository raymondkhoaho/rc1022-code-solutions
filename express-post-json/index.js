var express = require('express');
var app = express();

let nextId = 1;
const grades = {};

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/grades', (req, res) => {
  const arrayGrades = [];
  for (const key in grades) {
    arrayGrades.push(grades[key]);
  }
  res.json(arrayGrades);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newEntry = req.body;
  newEntry.id = nextId;
  grades[nextId] = newEntry;
  nextId++;
  res.status(201).json(newEntry);
});

var express = require('express');
var app = express();

app.use(function (req, res) {
  // eslint-disable-next-line no-console
  console.log(req.method);
  res.send('Hello World');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

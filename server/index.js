const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/../client')));

app.get('/', (req, res) => (
  res.end()
));

app.listen(3001, () => (
  console.log('Listening on port 3001...')
));

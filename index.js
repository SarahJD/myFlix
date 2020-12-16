// install Express
const express = require('express');
const app = express();

// install Morgan as an Express logging middleware
const morgan = require('morgan');

app.use(morgan('common'));

// Express GET routes
app.get('/movies', (req, res) => {
  res.json(top10Movies);
});

app.get('/', (req, res) => {
  res.send('Welcome to myFlix!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});

const express = require('express'), // install Express
  morgan = require('morgan'); // install Morgan (as a logging middleware)

const app = express();

app.use(morgan('common'));

const bodyParser = require('body-parser'), // install bodyParser as an Express error-handling middleware
  methodOverride = require('method-override');

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());
app.use(methodOverride());

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

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

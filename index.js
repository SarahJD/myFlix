const express = require('express'), // install Express
  morgan = require('morgan'); // install Morgan (as a logging middleware)

const app = express();

app.use(morgan('common'));

app.use(express.static('public'));

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

let top10Movies = [
  {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont'
  },
  {
    title: 'The Godfather',
    director: 'Francis Ford Coppola'
  },
  {
    title: 'The Godfather: Part II',
    director: 'Francis Ford Coppola'
  },
  {
    title: 'The Dark Knight',
    director: 'Christopher Nolan'
  },
  {
    title: 'Schindlers List',
    director: 'Steven Spielberg'
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    director: 'Peter Jackson'
  },
  {
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino'
  },
  {
    title: 'Fight Club',
    director: 'David Fincher'
  },
  {
    title: 'Forrest Gump',
    director: 'Robert Zemeckis'
  },
  {
    title: 'Inception',
    director: 'Christopher Nolan'
  }
];

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

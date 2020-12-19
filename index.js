const express = require('express'), // install Express
  morgan = require('morgan'), // install Morgan (as a logging middleware)
  uuid = require('uuid'); // install uuid for ID generating

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

let movies = [
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

// Gets the list of data about ALL movies
app.get('/movies', (req, res) => {
  res.json(movies);
});

// Gets the data about a single student, by name
app.get('/movies/:name', (req, res) => {
  res.json(
    movies.find(movie => {
      return movie.name === req.params.name;
    })
  );
});

// Gets the data about a single director, by name
app.get('/directors/:name', (req, res) => {
  res.json(
    directors.find(movie => {
      return director.name === req.params.name;
    })
  );
});

// Adds data for a new user to our list of users
app.post('/users', (req, res) => {
  let newStudent = req.body;

  if (!newUser.name) {
    const message = 'Missing name in request body';
    res.status(400).send(message);
  } else {
    newUser.id = uuid.v4();
    users.push(newUser);
    res.status(201).send(newUser);
  }
});

// Update the "username" of a user
app.put('/users/:username', (req, res) => {
  let user = users.find((user) => { return user.username === req.params.name });


// Adds data for a new movie to the user's list of favorite movies
app.post('/favoriteslist', (req, res) => {
  let newFavorite = req.body;

  if (!newFavorite.name) {
    const message = 'Missing name in request body';
    res.status(400).send(message);
  } else {
    newFavorite.id = uuid.v4();
    favorites.push(newFavorite);
    res.status(201).send(newFavorite);
  }
});

// Deletes a movie from the user's favorite movie list by ID
app.delete('/favoriteslist/:id', (req, res) => {
  let favorite = favorites.find((favorite) => { return favorite.id === req.params.id });

  if (favorite) {
    favorite = favorites.filter((obj) => { return obj.id !== req.params.id });
    res.status(201).send('Favorite Movie ' + req.params.id + ' was deleted.');
  }
});

// Deletes a user from the userlist by ID
app.delete('/users/:id', (req, res) => {
  let user = users.find((favorite) => { return user.id === req.params.id });

  if (user) {
    user = users.filter((obj) => { return obj.id !== req.params.id });
    res.status(201).send('User ' + req.params.id + ' was deleted.');
  }
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});

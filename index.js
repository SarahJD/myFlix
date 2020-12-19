const express = require('express'), // install Express
  morgan = require('morgan'), // install Morgan (as a logging middleware)
  uuid = require('uuid'), // install uuid for ID generating
  bodyParser = require('body-parser'), // install bodyParser as an Express error-handling middleware
  methodOverride = require('method-override');

const app = express();

app.use(morgan('common'));

app.use(express.static('public'));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.use(methodOverride());

/*
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
*/
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

// Gets the data about a single movie, by title
app.get('/movies/:title', (req, res) => {
  res.json(
    movies.find(movie => {
      return movie.title === req.params.title;
    })
  );
});

let users = [];

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
  let newUser = req.body;

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
  let user = users.find(user => {
    return user.username === req.params.username;
  });

  if (user) {
    user.username = req.body.username;
    res.status(201).send(user.username + ' is the new username');
  } else {
    res
      .status(404)
      .send('User with the name ' + req.params.username + ' was not found.');
  }
});

// Adds data for a new movie to the user's list of favorite movies
app.post('/users/:username/favorites', (req, res) => {
  let newFavorite = req.body;

  if (!newFavorite.title) {
    const message = 'Missing title in request body';
    res.status(400).send(message);
  } else {
    let user = users.find(user => {
      return user.username === req.params.username;
    });
    if (user) {
      newFavorite.id = uuid.v4();
      user.favorites.push(newFavorite);
      res.status(201).send(newFavorite);
    } else {
      res
        .status(404)
        .send('User with the name ' + req.params.username + ' was not found.');
    }
  }
});

// Deletes a movie from the user's favorite movie list by ID
app.delete('/users/:username/favorites/:id', (req, res) => {
  let user = users.find(user => {
    return user.username === req.params.username;
  });

  if (user) {
    let favorite = user.favorites.find(favorite => {
      return favorite.id === req.params.id;
    });
    if (favorite) {
      let index = user.favorites.indexOf(favorite);
      user.favorites.splice(index, 1);
      res.status(204).send('deleted');
    }
  } else {
    res
      .status(404)
      .send('User with the name ' + req.params.username + ' was not found.');
  }
});

// Deletes a user from the userlist by username
app.delete('/users/:username', (req, res) => {
  let user = users.find(user => {
    return user.username === req.params.username;
  });

  if (user) {
    let index = users.indexOf(user);
    users.splice(index, 1);
    res.status(204).send('deleted');
  } else {
    res
      .status(404)
      .send('User with the name ' + req.params.username + ' was not found.');
  }
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080');
});

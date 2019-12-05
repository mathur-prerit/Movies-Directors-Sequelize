/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

//  importing dependencies
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const {
  allDirectors, directorByID, deleteDirector, addDirector, updateDirector,
} = require('./routes/directors');
const {
  allMovies, movieByID, deleteMovie, addMovie, updateMovie,
} = require('./routes/movies');

const port = process.env.PORT || 8080;
const app = express();
app.use(express.urlencoded());
app.use(express.json());

// Database connection check
// db.authenticate()
//   .then((err) => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((err) => {
//     console.log('Unable to connect to the database:', err);
//   });

//  Morgan logging
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join('./logs/', 'access.log'), { flags: 'a' }),
}));

//  Default index
app.get('/', (req, res) => res.send('Welcome to home page'));

//  directors route
app.get('/api/directors', allDirectors);
app.get('/api/directors/:directorid', directorByID);
app.delete('/api/directors/:directorid', deleteDirector);
app.post('/api/directors/', addDirector);
app.put('/api/directors/:directorid', updateDirector);

//  movies route
app.get('/api/movies', allMovies);
app.get('/api/movies/:movieid', movieByID);
app.delete('/api/movies/:movieid', deleteMovie);
app.post('/api/movies/', addMovie);
app.put('/api/movies/:movieid', updateMovie);

// Error URL
app.get('*', (req, res) => res.status(200).send('You ended up on wrong URL'));

//  Listening port
app.listen(port);
console.log(`Server is running at: ${port}`);

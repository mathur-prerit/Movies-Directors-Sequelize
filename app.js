/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
//  importing dependencies
const express = require('express');

const db = require('./models/connection.js');
const {
  allDirectors, directorByID, deleteDirector, addDirector, updateDirector,
} = require('./routes/directors');

const app = express();
app.use(express.urlencoded());
app.use(express.json());

// Database connection check
db.authenticate()
  .then((err) => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', err);
  });

//  Default index
app.get('/', (req, res) => res.send('Welcome to home page'));

//  directors route
app.get('/api/directors', allDirectors);
app.get('/api/directors/:directorid', directorByID);
app.delete('/api/directors/:directorid', deleteDirector);
app.post('/api/directors/', addDirector);
app.put('/api/directors/:directorid', updateDirector);

// Error URL
app.get('*', (req, res) => res.status(200).send('You ended up on wrong URL'));

//  Listening port
app.listen(8080);
console.log('Server is running');

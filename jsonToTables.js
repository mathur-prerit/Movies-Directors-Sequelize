/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
const Sequelize = require('sequelize');
const express = require('express');

const app = express();
const fs = require('fs');

const file = fs.readFileSync('movies.json');
const obj = JSON.parse(file);

//  app.listen(8081);

//  Connection with db
const db = new Sequelize('moviesDirectors', 'prerit', '123', {
  hostname: 'localhost',
  dialect: 'mysql',
});


//  Checking database connection
db.authenticate()
  .then((err) => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', err);
  });

// Columns for movies table
const movies = db.define('movies', {
  rank: Sequelize.INTEGER,
  name: Sequelize.STRING,
  desc: Sequelize.STRING,
  runtime: Sequelize.INTEGER,
  genre: Sequelize.STRING,
  rating: Sequelize.FLOAT,
  metascore: Sequelize.INTEGER,
  votes: Sequelize.INTEGER,
  gross: Sequelize.FLOAT,
  director: Sequelize.STRING,
  actor: Sequelize.STRING,
  year: Sequelize.INTEGER,
}, {
  timestamps: false,
});

// const uniqueDirector = [];

// //  Insertion in movies tables
// db.sync({ force: true }).then(() => {
//   movies.findAll();
// }).then(() => {
//   for (const i of obj) {
//     if (!uniqueDirector.includes(i.Director)) {
//       uniqueDirector.push(i.Director);
//     }
//     for (const j in i) {
//       if (i[j] === 'NA') {
//         i[j] = null;
//       }
//     }
//     movies.create({
//       rank: i.Rank,
//       name: i.Title,
//       desc: i.Description,
//       runtime: i.Runtime,
//       genre: i.Genre,
//       rating: i.Rating,
//       metascore: i.Metascore,
//       votes: i.Votes,
//       gross: i.Gross_Earning_in_Mil,
//       director: i.Director,
//       actor: i.Actor,
//       year: i.Year,
//     });
//   }
// }).catch((err) => {
//   console.log('Error creating movies table');
// });

// Column for directors table
const directors = db.define('directors', {
  dname: Sequelize.STRING,
}, {
  timestamps: false,
});

// // Inserting data in director table
// db.sync({ force: true }).then(() => {
//   directors.findAll();
// }).then(() => {
//   for (const i of uniqueDirector) {
//     directors.create({
//       dname: i,
//     });
//   }
// })
//   .catch((err) => {
//     console.log('Error creating directors table');
//   });

module.exports = { directors, movies };

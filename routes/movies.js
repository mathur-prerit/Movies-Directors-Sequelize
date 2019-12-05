/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
const db = require('../models/index');

const Movies = db.Movies;

const { logger } = require('../logs/winston');

//  Get all Movies
const allMovies = (req, res) => {
  // Movies.getAllMovies()
  Movies.findAll()
    .then((results) => {
      /* results.forEach((row) => {
          response.write(`${row.id} ${row.d_name}\n`);
        });
        response.end(); */
      if (Object.values(results).length !== 0) {
        res.send(results);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((error) => {
      logger.error(error);
      res.sendStatus(500);
    });
};

// Get Movie by id
const movieByID = (req, res) => {
  Movies.findOne({ where: { id: req.params.movieid } })
    .then((results) => {
      if (Object.values(results).length !== 0) {
        res.send(results);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((error) => {
      logger.error(error.stack);
      res.sendStatus(500);
    });
};

// Deleting Movie by id
const deleteMovie = (req, res) => {
  Movies.destroy({ where: { id: req.params.movieid } })
    .then((results) => {
      console.log(results);
      if (results === 1) {
        res.sendStatus(410);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((error) => {
      logger.error(error);
      res.sendStatus(500);
    });
};

// Adding a new Movie
const addMovie = (req, res) => {
  const { body } = req;
  const dir = {
    rank: body.rank, name: body.name, des: body.des, runtime: body.runtime, genre: body.genre, rating: body.rating, metascore: body.metascore, votes: body.votes, gross: body.gross, director: body.director, actor: body.actor, year: body.year,
  };
  Movies.create({
    rank: dir.rank, name: dir.name, des: dir.des, runtime: dir.runtime, genre: dir.genre, rating: dir.rating, metascore: dir.metascore, votes: dir.votes, gross: dir.gross, director: dir.director, actor: dir.actor, year: dir.year,
  })
    .then((results) => {
      if (Object.values(results).length === 0) {
        res.send(400);
      } else {
        //  console.log(JSON.stringify(results));
        res.send(`New Movie id is: ${results.id}`);
      }
    })
    .catch((error) => {
      logger.error(error);
      res.sendStatus(409);
    });
};

// Updating a new Movie
const updateMovie = (req, res) => {
  const body = req.body;
  const dir = {
    rank: body.rank, name: body.name, des: body.des, runtime: body.runtime, genre: body.genre, rating: body.rating, metascore: body.metascore, votes: body.votes, gross: body.gross, director: body.director, actor: body.actor, year: body.year,
  };
  Movies.update({
    rank: dir.rank, name: dir.name, des: dir.des, runtime: dir.runtime, genre: dir.genre, rating: dir.rating, metascore: dir.metascore, votes: dir.votes, gross: dir.gross, director: dir.director, actor: dir.actor, year: dir.year,
  }, { where: { id: req.params.movieid } })
    .then((results) => {
      console.log(JSON.stringify(results[0]));
      if (results[0] === 0) {
        res.sendStatus(403);
      } else {
        res.sendStatus(202);
      }
    })
    .catch((error) => {
      logger.error(error);
      res.sendStatus(409);
    });
};

module.exports = {
  allMovies, movieByID, deleteMovie, addMovie, updateMovie,
};

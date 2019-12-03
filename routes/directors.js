/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */

const Directors = require('../models/directors');

//  Get all directors
const allDirectors = (req, res) => {
  Directors.getAllDirectors()
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
      console.log(error);
      res.sendStatus(500);
    });
};

// Get director by id
const directorByID = (req, res) => {
  Directors.getDirectorsByID(req.params.directorid)
    .then((results) => {
      if (Object.values(results).length !== 0) {
        res.send(results);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
};

// Deleting director by id
const deleteDirector = (req, res) => {
  Directors.delDirector(req.params.directorid)
    .then((results) => {
      //  console.log(typeof results);
      if (results === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(410);
      }
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
};

// Adding a new director
const addDirector = (req, res) => {
  const body = req.body;
  const dir = {
    name: body.name,
  };
  Directors.postDirector(dir.name)
    .then((results) => {
      if (Object.values(results).length === 0) {
        res.send(400);
      } else {
        //  console.log(JSON.stringify(results));
        res.send(`New director id is: ${results.id}`);
      }
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(409);
    });
};

// Updating a new director
const updateDirector = (req, res) => {
  const body = req.body;
  const dir = {
    name: body.name,
  };
  Directors.putDirector(req.params.directorid, dir.name)
    .then((results) => {
      console.log(JSON.stringify(results[0]));
      if (results[0] === 0) {
        res.sendStatus(403);
      } else {
        res.sendStatus(202);
      }
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(409);
    });
};

module.exports = {
  allDirectors, directorByID, deleteDirector, addDirector, updateDirector,
};

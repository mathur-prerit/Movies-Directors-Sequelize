/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */

const db = require('../models/index');
const logger = require('../logs/winston');

const Directors = db.Directors;

//  Get all directors
const allDirectors = (req, res) => {
  // Directors.getAllDirectors()
  Directors.findAll()
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
      logger.error({ message: `${error} in getting director by id` });
      res.sendStatus(500);
    });
};

// Get director by id
const directorByID = (req, res) => {
  Directors.findOne({ where: { id: req.params.directorid } })
    .then((results) => {
      if (Object.values(results).length !== 0) {
        res.send(results);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((error) => {
      logger.error({ message: `${error} in getting director by id` });
      res.sendStatus(500);
    });
};

// Deleting director by id
const deleteDirector = (req, res) => {
  Directors.destroy({ where: { id: req.params.directorid } })
    .then((results) => {
      //  logger.error(typeof results);
      if (results.affectedRows) {
        res.sendStatus(410);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((error) => {
      logger.error({ message: `${error} in deleting director by id` });
      res.sendStatus(500);
    });
};

// Adding a new director
const addDirector = (req, res) => {
  const body = req.body;
  const dir = {
    name: body.name,
  };
  Directors.create({ dname: dir.name })
    .then((results) => {
      if (Object.values(results).length === 0) {
        res.send(400);
      } else {
        //  console.log(JSON.stringify(results));
        res.send(`New director id is: ${results.id}`);
      }
    })
    .catch((error) => {
      logger.error({ message: `${error} in adding new director` });
      res.sendStatus(409);
    });
};

// Updating a new director
const updateDirector = (req, res) => {
  const body = req.body;
  const dir = {
    name: body.name,
  };
  Directors.update({ dname: dir.name }, { where: { id: req.params.directorid } })
    .then((results) => {
      //  console.log(JSON.stringify(results[0]));
      if (results[0] === 0) {
        res.sendStatus(403);
      } else {
        res.sendStatus(202);
      }
    })
    .catch((error) => {
      logger.error({ message: `${error} in updating director by id` });
      res.sendStatus(409);
    });
};

module.exports = {
  allDirectors, directorByID, deleteDirector, addDirector, updateDirector,
};

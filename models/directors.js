/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const { directors } = require('../jsonToTables.js');

//  Get all directors
const getAllDirectors = () => new Promise((resolve, reject) => {
  directors.findAll().then((results) => resolve(results)).catch((err) => reject(err));
});

// Getting directors by id
const getDirectorsByID = (directorid) => new Promise((resolve, reject) => {
  directors.findOne({ where: { id: directorid } }).then((results) => resolve(results)).catch((err) => reject(err));
});

// Deleting directors by id
const delDirector = (directorid) => new Promise((resolve, reject) => {
  directors.destroy({ where: { id: directorid } }).then((results) => resolve(results)).catch((err) => reject(err));
});

//  Posting new director
const postDirector = (name) => new Promise((resolve, reject) => {
  directors.create({ dname: name }).then((results) => resolve(results)).catch((err) => reject(err));
});

// Putting existing director
const putDirector = (directorid, name) => new Promise((resolve, reject) => {
  directors.update({ dname: name }, { where: { id: directorid } }).then((results) => resolve(results)).catch((err) => reject(err));
});

module.exports = {
  getAllDirectors, getDirectorsByID, delDirector, postDirector, putDirector,
};

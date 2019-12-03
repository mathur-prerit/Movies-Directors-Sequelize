/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const Sequelize = require('sequelize');

//  Connection with db
module.exports = new Sequelize('moviesDirectors', 'prerit', '123', {
  hostname: 'localhost',
  dialect: 'mysql',
});

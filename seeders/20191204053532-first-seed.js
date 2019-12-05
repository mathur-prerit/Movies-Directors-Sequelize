
const { allmovies } = require('../jsonToTables');

//  console.log(allmovies);

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Movies', allmovies),

  //       rank: i.Rank,
  //       name: i.Title,
  //       des: i.Description,
  //       runtime: i.Runtime,
  //       genre: i.Genre,
  //       rating: i.Rating,
  //       metascore: i.Metascore,
  //       votes: i.Votes,
  //       gross: i.Gross_Earning_in_Mil,
  //       director: i.Director,
  //       actor: i.Actor,
  //       year: i.Year,


  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Movies', null, {})
  ,
};

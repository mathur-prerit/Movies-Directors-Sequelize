/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
//  const Sequelize = require('sequelize');
const fs = require('fs');

const file = fs.readFileSync('movies.json');
const obj = JSON.parse(file);

const uniqueDirector = [];
const allmovies = [];
const checkingDirector = [];

function moviesReturn() {
  for (const i of obj) {
    if (!checkingDirector.includes(i.Director)) {
      checkingDirector.push(i.Director);
      uniqueDirector.push({ dname: i.Director });
    }
    for (const j in i) {
      if (i[j] === 'NA') {
        i[j] = null;
      }
    }
    allmovies.push({
      rank: i.Rank,
      name: i.Title,
      des: i.Description,
      runtime: i.Runtime,
      genre: i.Genre,
      rating: i.Rating,
      metascore: i.Metascore,
      votes: i.Votes,
      gross: i.Gross_Earning_in_Mil,
      director: i.Director,
      actor: i.Actor,
      year: i.Year,
    });
  }
  return allmovies;
}

moviesReturn();
//  console.log(uniqueDirector);
console.log(uniqueDirector.length);

module.exports = { allmovies, uniqueDirector };

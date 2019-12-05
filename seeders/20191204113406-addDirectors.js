
const { uniqueDirector } = require('../jsonToTables');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Directors', uniqueDirector),

  down: (queryInterface, Sequelize) => queryInterface.bullkDelete('Directors', null, {}),
};

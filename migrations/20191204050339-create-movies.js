
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Movies', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    rank: {
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    des: {
      type: Sequelize.STRING,
    },
    runtime: {
      type: Sequelize.INTEGER,
    },
    genre: {
      type: Sequelize.STRING,
    },
    rating: {
      type: Sequelize.FLOAT,
    },
    metascore: {
      type: Sequelize.INTEGER,
    },
    votes: {
      type: Sequelize.INTEGER,
    },
    gross: {
      type: Sequelize.FLOAT,
    },
    director: {
      type: Sequelize.STRING,
    },
    actor: {
      type: Sequelize.STRING,
    },
    year: {
      type: Sequelize.INTEGER,
    },
  }, {
    timestamps: false,
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Movies'),
};

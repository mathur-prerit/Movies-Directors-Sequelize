
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Directors', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    dname: {
      type: Sequelize.STRING,
    },
  }, {
    timestamps: false,
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Directors'),
};

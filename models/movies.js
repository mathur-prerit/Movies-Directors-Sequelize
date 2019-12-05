'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define('Movies', {
    rank: DataTypes.INTEGER,
    name: DataTypes.STRING,
    des: DataTypes.STRING,
    runtime: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    metascore: DataTypes.INTEGER,
    votes: DataTypes.INTEGER,
    gross: DataTypes.FLOAT,
    director: DataTypes.STRING,
    actor: DataTypes.STRING,
    year: DataTypes.INTEGER,
  }, {
    timestamps: false,
  });
  Movies.associate = function(models) {
    // associations can be defined here
  };
  return Movies;
};
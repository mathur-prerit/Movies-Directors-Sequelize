'use strict';
module.exports = (sequelize, DataTypes) => {
  const Directors = sequelize.define('Directors', {
    dname: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  Directors.associate = function(models) {
    // associations can be defined here
  };
  return Directors;
};
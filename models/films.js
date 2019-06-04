'use strict';
module.exports = (sequelize, DataTypes) => {
  const Films = sequelize.define('Films', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  Films.associate = function(models) {
    // associations can be defined here
  };
  return Films;
};
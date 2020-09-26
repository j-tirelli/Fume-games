'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    method () {
      console.log
    }

    static associate(models) {
      // Game.belongsToMany(models.User, {
      //   through: 'user_Game'
      // })
      // Game.hasMany(user_Game);
      // define association here
    }
  };
  Game.init({
    Title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};
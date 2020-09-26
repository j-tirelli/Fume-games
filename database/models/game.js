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
      Game.belongsToMany(models.User, {
        through: 'User_games'
      })
      Game.hasMany(models.user_game);
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
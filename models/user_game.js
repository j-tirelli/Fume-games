'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_game.belongsTo(user);
      user_game.belongsTo(game);
      // define association here
    }
  };
  user_game.init({
    user_id: DataTypes.INTEGER,
    game_id: DataTypes.INTEGER,
    time_played: DataTypes.INTEGER,
    purchase_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_game',
  });
  return user_game;
};
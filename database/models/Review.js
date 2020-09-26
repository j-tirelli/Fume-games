'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Review.belongsTo(User);
      // Review.belongsTo(game);
      // define association here
    }
  };
  Review.init({
    game_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    recommended: DataTypes.BOOLEAN,
    body: DataTypes.STRING,
    helpful_count: DataTypes.INTEGER,
    funny_count: DataTypes.INTEGER,
    comments_count: DataTypes.INTEGER,
    awards: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
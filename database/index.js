const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const models = require('./models');
dotenv.config();

const sequelize = new Sequelize('reviews', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});

var getReviews = async (GameId) => {
  const reviews = await models.Review.findAll({
    include: [{
      model: models.User,
    }, {
      model: models.Game,
    }, {
      model: models.User_game,
    }],
    where: { GameId }
  });
  return reviews;
};

var updateReview = async (id, dataToChange) => {
  const review = await models.Review.findOne({ where: { id } });
  if (dataToChange.key === 'awards') {
    let parsedAwards = JSON.parse(review.awards);
    parsedAwards[dataToChange.val]++;
    review.awards = JSON.stringify(parsedAwards);
  } else if (dataToChange.key === 'funny') {
    review.funny_count++
  } else if (dataToChange.key === 'helpful') {
    review.helpful_count++
  } else if (dataToChange.key === 'unhelpful') {
    review.helpful_count--
  }
  review.save();
  return review;
};

module.exports.getReviews = getReviews;
module.exports.updateReview = updateReview;
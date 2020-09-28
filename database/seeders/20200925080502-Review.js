var faker = require('faker');
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const fakeUser = {};
    const reviews = [];

    await queryInterface.sequelize.query(`SELECT User_games.*, Users.reviews_count, Users.username from User_games Join Users WHERE Users.id = User_games.UserId ORDER BY RAND()`)
      .then((User_games) => {
        User_games[0].forEach((result) => {
          if (!fakeUser[result.username]) {
            fakeUser[result.username] = result.reviews_count;
          } else {
            fakeUser[result.username]--;
          }
          if (fakeUser[result.username] > 0) {
            var GameId = result.GameId;
            var UserId = result.UserId;
            var recommended = faker.random.boolean();
            var body = faker.lorem.paragraph();
            var helpful_count = faker.random.number({min: 0, max: 27});
            var funny_count = faker.random.number({min: 0, max: 3});
            var comments_count = faker.random.number({min: 0, max: 9});
            var treasure = faker.random.number({min: 0, max: 1});
            var mindBlown = faker.random.number({min: 0, max: 2});
            var goldenUnicorn = faker.random.number({min: 0, max: 3});
            var deepThoughts = faker.random.number({min: 0, max: 4});
            var heartwarming = faker.random.number({min: 0, max: 5});
            var hilarious = faker.random.number({min: 0, max: 4});
            var hotTake = faker.random.number({min: 0, max: 3});
            var poetry = faker.random.number({min: 0, max: 2});
            var extraHelpful = faker.random.number({min: 0, max: 1});
            var awards = `{"Treasure":${treasure},"Mind Blown":${mindBlown},"Golden Unicorn":${goldenUnicorn},"Deep Thoughts":${deepThoughts},"Heartwarming":${heartwarming},"Hilarious":${hilarious},"Hot Take":${hotTake},"Poetry":${poetry},"Extra Helpful":${extraHelpful}}`;
            var createdAt = faker.date.between('2009-01-01', '2020-09-05');
            var updatedAt = createdAt;
            reviews.push({ GameId, UserId, recommended, body, helpful_count, funny_count, comments_count, awards, createdAt, updatedAt });
          }
        })
      })

    await queryInterface.bulkInsert('Reviews', reviews, {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};

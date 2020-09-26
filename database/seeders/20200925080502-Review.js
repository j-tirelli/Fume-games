'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Reviews',
    [
      {
        user_id: 1,
        game_id: 1,
        recommended: true,
        body: 'This game was Awesome!',
        helpful_count: 15,
        funny_count: 2,
        comments_count: 1,
        awards: '{"Treasure":1,"Mind Blown":0,"Golden Unicorn":0,"Deep Thoughts":0,"Heartwarming":0,"Hilarious":0,"Hot Take":0,"Poetry":0,"Extra Helpful":1}',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        game_id: 2,
        recommended: false,
        body: 'This game Sucked!',
        helpful_count: 47,
        funny_count: 1,
        comments_count: 12,
        awards: '{"Treasure":0,"Mind Blown":0,"Golden Unicorn":0,"Deep Thoughts":0,"Heartwarming":0,"Hilarious":0,"Hot Take":0,"Poetry":0,"Extra Helpful":0}',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        game_id: 1,
        recommended: true,
        body: 'This game was OK.',
        awards: '{"Treasure":0,"Mind Blown":0,"Golden Unicorn":0,"Deep Thoughts":0,"Heartwarming":0,"Hilarious":0,"Hot Take":0,"Poetry":0,"Extra Helpful":0}',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('User_games',
    [
      {
        UserId: 1,
        GameId: 1,
        time_played: 3.2,
        purchase_type: 'Steam Purchase',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        GameId: 2,
        time_played: 1.4,
        purchase_type: 'Non-Steam Purchase',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 2,
        GameId: 1,
        time_played: 1.4,
        purchase_type: 'Steam Purchase',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User_games', null, {});
  }
};

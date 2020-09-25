'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users',
    [
      {
        Username: 'John Doe',
        avatar: 'https://random.dog/0e198464-e755-43bb-a2f8-9db136507f38.JPG',
        games_owned_count: 3,
        reviews_count: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Username: 'Jane Doe',
        avatar: 'https://random.dog/0e198464-e755-43bb-a2f8-9db136507f38.JPG',
        games_owned_count: 4,
        reviews_count: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Games',
    [
      {
        title: 'Adventures of John Doe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The New Adventures of Jane Doe',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Games', null, {});
  }
};

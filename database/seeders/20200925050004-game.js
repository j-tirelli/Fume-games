var faker = require('faker');
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const fakeGames = [];
    const noDupe = {}
    for (var i = 0; i < 100; i++) {
      var fakeDate = faker.date.between('2009-01-01', '2020-09-05');
      var fakeTitle = faker.commerce.productAdjective() + ' ' + faker.commerce.productName();
      if (!noDupe[fakeTitle]) {
        fakeGames.push({title: fakeTitle, createdAt: fakeDate, updatedAt: fakeDate});
        noDupe[fakeTitle] = true;
      }
    }
    await queryInterface.bulkInsert('Games', fakeGames, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Games', null, {});
  }
};

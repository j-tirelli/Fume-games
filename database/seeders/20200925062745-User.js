var faker = require('faker');
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const fakeUsers = [];
    const noDupe = {}
    for (var i = 0; i < 105; i++) {
      var fakeDate = faker.date.between('2009-01-01', '2020-09-05');
      var fakeName = faker.internet.userName();
      var fakePic = faker.internet.avatar();
      var fakeOwned = Math.floor(Math.random() * 100);
      var fakeReviewed = Math.floor(Math.random() * 50);
      if (!noDupe[fakeName]) {
        fakeUsers.push({Username: fakeName, avatar: fakePic, games_owned_count: fakeOwned, reviews_count: fakeReviewed, createdAt: fakeDate, updatedAt: fakeDate});
        noDupe[fakeName] = true;
      }
    }

    await queryInterface.bulkInsert('Users', fakeUsers, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

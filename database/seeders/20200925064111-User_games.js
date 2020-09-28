var faker = require('faker');
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const fakeUserGames = [];
    await queryInterface.sequelize.query(`SELECT id, games_owned_count FROM Users`)
      .then((users) => {
        users[0].forEach((user) => {
          var UserId = user.id;
          for (var i = 0; i < user.games_owned_count; i++) {
            var createdAt = faker.date.between('2009-01-01', '2020-09-05');
            var updatedAt = createdAt;
            var GameId = Math.floor(Math.random() * 100);
            let time_played = Math.round(((Math.random() * 1000) + Number.EPSILON) * 100) / 100;
            var purchase_type = (Math.random() > 0.5) ? 'Steam Purchase' : 'Non-Steam Purchase';
            fakeUserGames.push({ UserId, GameId, time_played, purchase_type, createdAt, updatedAt })
          }
        })
      })
    await queryInterface.bulkInsert('User_games', fakeUserGames, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User_games', null, {});
  }
};

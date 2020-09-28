// const sequelize = require('sequelize');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const db = require('../database');

test('Sanity Check - adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'reviewsComponent-dev'
});

test('it should change an existing value', () => {
  connection.query(
    'SELECT awards, id FROM `Reviews`',
    function(err, results) {
      debugger;
      var id =  results[0].id;
      var awards =  JSON.parse(results[0].awards);
      var oldValue = awards['Deep Thoughts'];
      var dataToChange = { key: 'awards', val: 'Deep Thoughts' };
      db.updateReview(results[0].id, dataToChange)
      connection.query(
        'SELECT awards FROM `Reviews` WHERE id = ' + id,
        function(err, result) {
          var awards =  JSON.parse(results[0].awards);
          var newValue = awards['Deep Thoughts'];
          expect(newValue === oldValue + 1);
        }
      );
    }
  );
});
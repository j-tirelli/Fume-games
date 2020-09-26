const express = require('express')
const db = require('../database');

const app = express()
const port = 3000

app.get('/moist-air/reviews', (req, res, next) => {
  console.log('ID: ', req.query.gameID);
  db.getReviews(req.query.gameID)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
})

app.patch('/moist-air/reviews', (req, res, next) => {
  var dataToChange = { key: req.query.key, val: req.query.value };
  db.updateReview(req.query.reviewID, dataToChange)

    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
})

var faker = require('faker');
const fakeGames = [];
for (var i = 0; i < 100; i++) {
  var fakeDate = faker.date.between('2009-01-01', '2020-09-05');
  fakeGames.push({title: faker.commerce.productName(), createdAt: fakeDate, updatedAt: fakeDate});
}
console.log(fakeGames);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
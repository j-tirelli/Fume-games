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
      console.log('---err---', err);
    });
})

app.patch('/moist-air/reviews', (req, res, next) => {
  var dataToChange = { key: req.query.key, val: req.query.value };
  db.updateReview(req.query.reviewID, dataToChange)

    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log('---err---', err);
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
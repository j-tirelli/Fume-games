const express = require('express');
const db = require('../database');

const app = express()
const port = 3000

// app.use(express.static('client/dist'))


app.get('/moist-air/reviews', (req, res, next) => {
  // debugger
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express');
const bodyParser = require('body-parser');
const items = require('../database/index.js');
const request = require('request');
const MY_API_KEY = require('../react-client/config');

const app = express();
const port = 3003;

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/api/ingredients/:ingredient', (req, res) => {
  const ingredient = req.params.ingredient;
  items.findSubs(ingredient, (err, data) => {
    res.send(data[0]).status(200);
  })
  // res.json('queried the ingredient: ' + keyword);
})

app.listen(port, () => console.log(`Listening on port ${port}`))

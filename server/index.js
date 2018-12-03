const express = require('express');
const bodyParser = require('body-parser');
const items = require('../database/index.js');
const app = express();
const port = 3003;

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/api/ingredients/:ingredient', (req, res) => {
  const ingredient = req.params.ingredient;
  items.findSubs(ingredient, (err, data) => {
    res.send(data[0]).status(200);
  })
  // res.json('queried the ingredient: ' + keyword);
})

app.listen(port, () => console.log(`Listening on port ${port}`))
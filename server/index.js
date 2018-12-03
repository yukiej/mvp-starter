const express = require('express');
const bodyParser = require('body-parser');
const items = require('../database/index.js');
const app = express();
const port = 3003;

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/', (req, res, next) => {
  res.send('Hello I am a budding chrome extension')
});

// app.get(`/api/ingredients/${}`, (req, res, next) => {

// })

app.listen(port, () => console.log(`Listening on port ${port}`))
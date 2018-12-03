const mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/ingredients';
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
})

db.once('open', function() {
  console.log('Success connecting to mongoose!')
})

var itemSchema = mongoose.Schema({
  name: String,
  unit: String,
  amount: Number,
  subs: []
})

var Item = mongoose.model('Item', itemSchema);

var findSubs = function(ingredient, callback) {
  Item.find({ 'name' : ingredient }, function(err, items) {
    if (err) {
      callback(err, null);
    } else {
      console.log('successful query!')
      callback(null, items);
    }
  });
}

module.exports.findSubs = findSubs;

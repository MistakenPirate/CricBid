const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  cost: Number,
  sold: {
    type:Boolean,
    default:false,
  }
});

module.exports = mongoose.model('Player', playerSchema);

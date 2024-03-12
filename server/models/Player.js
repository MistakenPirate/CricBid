const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  cost: Number,
  type: String,
  sold: {
    type:Boolean,
    default:false,
  },
  imageURL: String,
  sequence: Number,
});

module.exports = mongoose.model('Player', playerSchema);

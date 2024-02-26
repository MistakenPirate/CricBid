// models/Player.js
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  cost: Number,
});

module.exports = mongoose.model('Player', playerSchema);

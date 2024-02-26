const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  budget: {
    type:Number,
    default: 10000,
  }
});

module.exports = mongoose.model('User', userSchema);

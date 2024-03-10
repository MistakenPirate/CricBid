const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  budget: {
    type:Number,
    default: 100000,
  },
  bt:{
    type:Boolean,
    default:0,
  },
  bl:{
    type:Boolean,
    default:0,
  },
  al:{
    type:Boolean,
    default:0,
  },
  wk:{
    type:Boolean,
    default:0,
  },
  points:{
    type:Number,
    default:0,
  }
});

module.exports = mongoose.model('User', userSchema);

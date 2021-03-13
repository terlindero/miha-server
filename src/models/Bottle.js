const mongoose = require('mongoose');

const bottleSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  quantity: {
    type: String
  },
  time: {
    type: String
  }, 
  date: {
	  type: String,
	  required: true
  }
});

mongoose.model('Bottle', bottleSchema);
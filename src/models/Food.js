const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  solids: {
    type: String,
	required: true
  },
  liquids: {
    type: String,
	required: true
  },
  date: {
	  type: String,
	  required: true
  }
});

mongoose.model('Food', foodSchema);
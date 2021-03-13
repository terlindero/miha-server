const mongoose = require('mongoose');

const diaperSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  pee: {
    type: String,
	required: true
  },
  poop: {
    type: String,
	required: true
  },
  concerns: {
	 type: String 
  },
  date: {
	  type: String,
	  required: true
  }
});

mongoose.model('Diaper', diaperSchema);
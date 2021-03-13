const mongoose = require('mongoose');

const sleepSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  night: {
    type: String,
	required: true
  },
  hours: {
    type: String,
	required: true
  },
  naps: {
	  type: String,
	  required: true
  },
  date: {
	  type: String,
	  required: true
  }
});

mongoose.model('Sleep', sleepSchema);
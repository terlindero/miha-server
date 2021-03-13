const mongoose = require('mongoose');

const weightSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  newweight: {
    type: String,
	required: true
  },
  date: {
    type: String,
	required: true
  }
});

mongoose.model('Weight', weightSchema);

const mongoose = require('mongoose');

const ageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  birthday: {
    type: String,
	required: true
  }
});

mongoose.model('Age', ageSchema);
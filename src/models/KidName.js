const mongoose = require('mongoose');

const kidnameSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  childname: {
    type: String,
	required: true
  },
  sex: {
    type: String,
	required: true
  }
});

mongoose.model('KidName', kidnameSchema);
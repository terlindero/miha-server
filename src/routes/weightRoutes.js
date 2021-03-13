const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Weight = mongoose.model('Weight');

const router = express.Router();

router.use(requireAuth);

router.get('/weights', async (req, res) => {
  const weights = await Weight.find({ userId: req.user._id });

  res.send(weights);
});	

router.post('/weights', async (req, res) => {
  const { newweight, date } = req.body;

  if (!newweight || !date) {
    return res.status(422).send({ error: 'You must provide a weight and date' });
  }

  try {
    const weight = new Weight({ newweight, date, userId: req.user._id });
    await weight.save();
    res.send(weight);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;

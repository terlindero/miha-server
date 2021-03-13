const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Food = mongoose.model('Food');

const router = express.Router();

router.use(requireAuth);

router.get('/foods', async (req, res) => {
  const foods = await Bottle.find({ userId: req.user._id });

  res.send(foods);
});	

router.post('/foods', async (req, res) => {
  const { solids, liquids, date } = req.body;

  if (!solids || !liquids) {
    return res.status(422).send({ error: 'You must provide all of the information in the form.' });
  }

  try {
    const food = new Food({ solids, liquids, date, userId: req.user._id });
    await food.save();
    res.send(food);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
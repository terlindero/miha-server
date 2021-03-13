const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Bottle = mongoose.model('Bottle');

const router = express.Router();

router.use(requireAuth);

router.get('/bottles', async (req, res) => {
  const bottles = await Bottle.find({ userId: req.user._id });

  res.send(bottles);
});	

router.post('/bottles', async (req, res) => {
  const { quantity, time, date } = req.body;
  
  try {
    const bottle = new Bottle({ quantity, time, date, userId: req.user._id });
    await bottle.save();
    res.send(bottle);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
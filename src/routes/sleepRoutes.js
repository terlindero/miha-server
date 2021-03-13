const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Sleep = mongoose.model('Sleep');

const router = express.Router();

router.use(requireAuth);

router.get('/sleeps', async (req, res) => {
  const sleeps = await Sleep.find({ userId: req.user._id });

  res.send(sleeps);
});	

router.post('/sleeps', async (req, res) => {
  const { night, hours, naps, date } = req.body;

  if (!night || !hours || !naps) {
    return res.status(422).send({ error: 'You must provide all of the information in the form.' });
  }

  try {
    const sleep = new Sleep({ night, hours, naps, date, userId: req.user._id });
    await sleep.save();
    res.send(sleep);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
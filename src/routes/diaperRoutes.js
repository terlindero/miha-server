const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Diaper = mongoose.model('Diaper');

const router = express.Router();

router.use(requireAuth);

router.get('/diapers', async (req, res) => {
  const diapers = await Diaper.find({ userId: req.user._id });

  res.send(diapers);
});	

router.post('/diapers', async (req, res) => {
  const { pee, poop, concerns, date } = req.body;

  if (!pee || !poop) {
    return res.status(422).send({ error: 'You must provide all of the information in the form.' });
  }

  try {
    const diaper = new Diaper({ pee, poop, concerns, date, userId: req.user._id });
    await diaper.save();
    res.send(diaper);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
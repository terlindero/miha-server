const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Age = mongoose.model('Age');

const router = express.Router();

router.use(requireAuth);

router.get('/ages', async (req, res) => {
  const ages = await Age.find({ userId: req.user._id });

  res.send(ages);
});	

router.post('/ages', async (req, res) => {
  const { birthday } = req.body;

  if (!birthday) {
    return res.status(422).send({ error: 'You must provide a weight and date' });
  }

  try {
    const age = new Age({ birthday, userId: req.user._id });
    await age.save();
    res.send(age);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;

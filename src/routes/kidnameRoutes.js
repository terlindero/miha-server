const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const KidName = mongoose.model('KidName');

const router = express.Router();

router.use(requireAuth);

router.get('/names', async (req, res) => {
  const names = await KidName.find({ userId: req.user._id });

  res.send(names);
});	

router.post('/names', async (req, res) => {
  const { childname, sex } = req.body;

  if (!childname || !sex) {
    return res.status(422).send({ error: 'You must provide a weight and date' });
  }

  try {
    const name = new KidName({ childname, sex, userId: req.user._id });
    await name.save();
    res.send(name);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
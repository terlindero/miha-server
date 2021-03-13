require('./models/User');
require('./models/Weight');
require('./models/Sleep');
require('./models/Bottle');
require('./models/Food');
require('./models/Diaper');
require('./models/KidName');
require('./models/Age');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const weightRoutes = require('./routes/weightRoutes');
const sleepRoutes = require('./routes/sleepRoutes');
const bottleRoutes = require('./routes/bottleRoutes');
const foodRoutes = require('./routes/foodRoutes');
const diaperRoutes = require('./routes/diaperRoutes');
const kidnameRoutes = require('./routes/kidnameRoutes');
const ageRoutes = require('./routes/ageRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(weightRoutes);
app.use(sleepRoutes);
app.use(bottleRoutes);
app.use(foodRoutes);
app.use(diaperRoutes);
app.use(kidnameRoutes);
app.use(ageRoutes);

const mongoUri = 'mongodb+srv://admin:MIHA2021@cluster0.2urda.mongodb.net/<dbname>?retryWrites=true&w=majority';
if (!mongoUri) {
  throw new Error(
    `MongoURI was not supplied.  Make sure you watch the video on setting up Mongo DB!`
  );
}
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error', err => {
  console.error('Error connecting to mongo', err);
});

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

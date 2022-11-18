//Import Dependencies
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// Public folder to connect to a front-end 
app.use(express.static('public'));


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Log mongo queries being executed
mongoose.set('debug', true);

app.use(require('./routes/api'));



app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');


// DB config
const db = require('./config/database').mongoURI

// Connect to Database
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('DB is connected'))
  .catch(err => console.log(err))

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// Passport middleware
app.use(passport.initialize())

// Passport config 
require('./config/passport')(passport)

  // Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

// Import Routes
const admins = require('./routes/admins');
const videos = require('./routes/videos');
const customers = require('./routes/customers');

// Route config
app.use('/admins', admins);
app.use('/videos', videos);
app.use('/customers', customers);

// Port Number
const port = 3000;

// Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
})
// Import our dependencies
require('dotenv').config(); // bring in our .env vars
const express = require('express'); // web framework for node
const morgan = require('morgan'); // logger for node
const methodOverride = require('method-override'); // allows us to use PUT and DELETE methods
const Fighter = require('./models/fighter');

// express application
const app = express();

// middleware
app.use(morgan('dev')); // logging
app.use(methodOverride('_method')); // override with POST having ?_method=DELETE or ?_method=PUT
app.use(express.static('public')); // serve static files from public folder

// Routes

app.get('/fighter', async (req, res) => {
    const allFighters = await Fighter.find({})
    res.render('fighters/index.ejs', {fighters: allFighters})
})


// Listen 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`App Listening on port ${PORT}`)})
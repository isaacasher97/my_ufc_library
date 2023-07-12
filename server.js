// Import our dependencies
require('dotenv').config(); // bring in our .env vars
const express = require('express'); // web framework for node
const morgan = require('morgan'); // logger for node
const methodOverride = require('method-override'); // allows us to use PUT and DELETE methods
const FighterRouter = require('./controllers/fighter')

// express application
const app = express();

// middleware
app.use(morgan('dev')); // logging
app.use(express.urlencoded()); // allows the req.body to be read from the form
app.use(methodOverride('_method')); // override with POST having ?_method=DELETE or ?_method=PUT
app.use(express.static('public')); // serve static files from public folder
app.use("/fighter", FighterRouter)

//redirect "/" route on deployed site to /fighter

app.get("/", (req, res) => {
    res.redirect("/fighter")
})

// Listen 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`App Listening on port ${PORT}`)})
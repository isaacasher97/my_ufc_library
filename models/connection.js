// import dependencies
require('dotenv').config(); // bring in our .env vars
const mongoose = require('mongoose'); // MongoDB ORM

// get DATABASE URL
const DATABASE_URL = process.env.DATABASE_URL;

// Connect to MongoDB
mongoose.connect(DATABASE_URL)

// CONNECTION EVENTS
mongoose.connection
.on("open", () => console.log("Connected to MongoDB"))
.on("close", () => console.log("Disconnected from MongoDB"))
.on("error", (error) => console.log(error));

// export the connection
module.exports = mongoose;
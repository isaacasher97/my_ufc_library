const mongoose = require('./connection');

const { Schema, model } = mongoose;

const fighterSchema = new Schema({
   name: String,
   hometown: String,
   weightClass: String,
   img: String,
   age: Number,
   readyToFight: Boolean 
});

const Fighter = model('fighter', fighterSchema);

module.exports = Fighter;
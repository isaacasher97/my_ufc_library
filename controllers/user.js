const express = require('express');
const bcrypt = require('bcryptjs'); // Hashes and encrypts password when saving it to the mongoDB for security reason (In case of hackers!)

const User = require('../models/user');

const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('users/signup.ejs')
})

router.post('/signup', async (req, res) => {
   req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10)) // generates a random string with 10 charachters and encrypt the password using that random string
   await User.create(req.body);
   res.redirect('/user/login');
})

router.get('/login', (req, res) => {
    res.render('users/login.ejs')
})

router.post('/login', (req, res) => {
    res.send('login')
})

module.exports = router;
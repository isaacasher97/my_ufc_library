const express = require('express');
const bcrypt = require('bcryptjs'); // Hashes and encrypts password when saving it to the mongoDB for security reason (In case of hackers!)

const User = require('../models/user');

const router = express.Router();
//temo riutes - no ejs created yet for these routes
router.get('/signup', (req, res) => {
    res.render('users/signup.ejs')
})

router.post('/signup', (req, res) => {
    res.send('signup')
})

router.get('/login', (req, res) => {
    res.render('users/login.ejs')
})

router.post('/login', (req, res) => {
    res.send('login')
})

module.exports = router;
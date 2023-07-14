const express = require('express');
const bcrypt = require('bcryptjs'); // Hashes and encrypts password when saving it to the mongoDB for security reason (In case of hackers!)

const User = require('../models/user');

const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('users/signup.ejs')
})

router.post('/signup', async (req, res) => {
   req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10)) // generates a random string with 10 charachters and encrypt the password using that random string

   try{
   await User.create(req.body);
   res.redirect('/user/login');
    }catch{
        res.send('Username already exists, please go back and try again')
    }
})

router.get('/login', (req, res) => {
    res.render('users/login.ejs')
})

router.post('/login', async (req, res) => {
    const { username } = req.body 
    const user = await User.findOne({username})

    if(!user){
        res.send('User Does Not Exist, Please go back and try again')
    }else {
        const doesPassMatch = bcrypt.compareSync(req.body.password, user.password) // compares the password typed in to the password saved to the db

        if(doesPassMatch) {
            req.session.username = req.body.username;
            req.session.loggedIn = true;
             res.redirect('/fighter')
         }else {
            res.send('Password Is Incorrect, Please Go Back and try again')
         }

    }

})

module.exports = router;
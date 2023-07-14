const express = require('express');
const Fighter = require('../models/fighter');

const router = express.Router();

router.use((req, res, next) => {
    //check to see if user is logged in via req.session.loggedIn property
    if(req.session.loggedIn){
        next(); // allows the user to access the routes defined below
    }else{ // if not logged in 
        res.redirect('/user/login') // have the user redirected to the login page
    }
})



router.get('/', async (req, res) => {
    const allFighters = await Fighter.find({ username: req.session.username })
    res.render('fighters/index.ejs', {fighters: allFighters})
})

router.get('/new', (req, res) => {
    res.render('fighters/new.ejs')
})

router.post('/', async (req, res) => {
    if(req.body.readyToFight === 'on'){
    req.body.readyToFight = true;
}else{
    req.body.readyToFight = false;
}
req.body.username = req.session.username; // scrubs the data and adds the username property to it

await Fighter.create(req.body);
res.redirect('/fighter')
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const fighter = await Fighter.findById(id);
    res.render('fighters/show.ejs', {fighter})
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await Fighter.findByIdAndRemove(id);
    res.redirect('/fighter')
})

router.get('/:id/edit', async (req, res) => {
    const id = req.params.id;
    const fighter = await Fighter.findById(id)
    res.render('fighters/edit.ejs', {fighter})
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    req.body.readyToFight = req.body.readyToFight === 'on' ? true : false;
    await Fighter.findByIdAndUpdate(id, req.body);
    res.redirect('/fighter');
})

module.exports = router;
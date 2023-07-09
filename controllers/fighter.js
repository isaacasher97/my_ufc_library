const express = require('express');
const Fighter = require('../models/fighter');

const router = express.Router();

router.get('/', async (req, res) => {
    const allFighters = await Fighter.find({})
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
await Fighter.create(req.body);
res.redirect('/fighter')
})

module.exports = router;
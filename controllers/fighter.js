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

module.exports = router;
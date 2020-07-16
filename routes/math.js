const express = require('express');
const router = express.Router();
const mathApi = require('../src/js/mathApi')

// Get math facts route
router.get('/', async (req, res) => {
    let fact = await mathApi(req.query.number).then(result => {
        return result
    })
    res.render('math/index', {
        fact: fact,
        number: req.query.number
    })
})


module.exports = router
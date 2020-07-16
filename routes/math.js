const express = require('express');
const router = express.Router();
const mathApi = require('../models/mathApi')

// Get math facts route
router.get('/', async (req, res) => {
    console.log(req.query.number);
    if (req.query.number){
        try{
            let fact = await mathApi(req.query.number).then(result => {
                return result
            })
            res.render('math/index', {
                data: "true",
                number: req.query.number,
                fact: fact
            })
        } catch (err) {
            console.log(err)
        }
    } else {
        res.render('math/index', {
            data: "false"
        })
        }
    }
)

module.exports = router
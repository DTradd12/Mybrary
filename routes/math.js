const express = require('express');
const router = express.Router();
const mathApi = require('../models/mathApi')

// Get math facts route
router.get('/', async (req, res) => {
    if (req.query.number){
        let number = parseInt(req.query.number)
        if (isNaN(number)){
            res.render('math/index', {
                data:"false",
                errorMessage: 'Input must be a number.'
            })
        } else {
            try{
                let fact = await mathApi(number).then(result => {
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
        }
    } else {
        res.render('math/index', {
            data: "false"
        })
        }
    }
)

module.exports = router
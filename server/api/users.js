const express = require('express')
const User = require('../models/User')
const router = express.Router()


router.post('/register', async (req, res) => {

    try {

        const{ email, password, firstName, lastName } = req.body

        if (!email || !password || !firstName || !lastName) return res.send({success: false, errorId: 1})

        const newUser = new User(req.body)

        const user = await newUser.save()

        res.send({success: true})
        
    } catch (error) {

        console.log('ERROR:', error.message);
        res.send(error.message)
        
    }
})

router.post('/login', async (req, res) => {

    try {

        const { email, pass} = req.body

        if (!email || !pass) return res.send({success: false, errorId: 1})

        const newUser = new User(req.body)

        const user = await User.findOne({email: email, pass: pass}).select('email')

        res.send({success: true, user})
        
    } catch (error) {

        console.log('ERROR:', error.message);
        res.send(error.message)
        
    }
})


module.exports  = router
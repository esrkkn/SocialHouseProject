const express = require('express')
const User = require('../models/User')
const router = express.Router()


router.post('/register', async (req, res) => {

    try {

        const{ email, password, firstName, lastName, phoneNumber } = req.body

        if (!email || !password || !firstName || !lastName || !phoneNumber) return res.send({success: false, errorId: 1})

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

        const { email, password} = req.body

        if (!email || !password) return res.send({success: false, errorId: 1})

        const newUser = new User(req.body)

        const user = await User.findOne({email: email, password: password}).select('email')

        res.send({success: true, user})
        
    } catch (error) {

        console.log('ERROR:', error.message);
        res.send(error.message)
        
    }
})


module.exports  = router
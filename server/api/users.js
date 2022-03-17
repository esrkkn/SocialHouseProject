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

        const user = await User.findOne({email: email, password: password}).select('email firstName lastName')

        res.send({success: true, user: user})
        console.log('user is',user);
        
    } catch (error) {

        console.log('ERROR:', error.message);
        res.send(error.message)
        
    }
})

router.patch('/profile', async (req, res) => {

    try {
        
        console.log('req.body is', req.body)

        const {email, firstName, _id} = req.body

        if (!(email || firstName)) return res.send({success: false, errorId: 1})

        // const foundUser = await User.findById({_id})
        // 
        // update users (field1, field2) set field1 = email and field2 = username

        const user = await User.findByIdAndUpdate(_id, req.body, {new: true}).select('-__v -pass')

        console.log('Profile: user is', user)

        if (!user) return res.send({success: false, errorId: 2})

        res.send({success: true, user})
    } catch (error) {
        
        console.log('Register ERROR:', error.message)
        res.send(error.message)
    }
})

module.exports  = router
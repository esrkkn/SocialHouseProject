const express = require('express')
const Post = require('../models/Post')
const router = express.Router()


router.post('/add', async (req, res) => {

    try {
        console.log('posts/add body is', req.body)

        const newPost = req.body
        console.log('newPost is', newPost);

        // const post = await newPost.save()
        const post = await newPost.save().then( item => item.populate({path: 'owner post', select: 'firstName lastName email'}))

        if (!post) return res.send({success: false, errorId: 2})

        res.send({success: true, newPost})
    } catch (error) {
        
        console.log('Posts add ERROR', error. message)
        res.send(error. message)
    }
})


router.get('/list', async (req, res) => {

    try {
        
        const posts = await Post.find().limit(10).populate({
            path: 'owner',
            select: 'firstName lastName'
        })
console.log('Hello from list');
        res.send(posts)
    } catch (error) {
        
        console.log('Posts list ERROR', error. message)
        res.send(error. message)
    }
})

module.exports  = router

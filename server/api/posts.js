const express = require('express')
const Post = require('../models/Post')
const router = express.Router()

const multer = require('multer')

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
 

const storageCloudinary = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'newproject',
    
    public_id: (req, file) => Date.now(),
    
  },
  
});
const uploadCloudinary = multer({ storage: storageCloudinary });

 


router.post('/add' , uploadCloudinary.single('image'), async (req, res) => {

    try {
        console.log('posts/add body is', req.body)

        if (req.file) req.body.image = req.file.path;

        const newPost = new Post(req.body);
        

        // const post = await newPost.save()
        const post = await newPost.save().then( item => item.populate({path: 'owner', select: 'email'}))
        console.log('newPost is', post);
        if (!post) return res.send({success: false, errorId: 2})

        
        res.send({success: true, newPost})
    } catch (error) {
        
        console.log('Posts add ERROR', error. message)
        res.send(error. message)
    }
})


router.get('/list', async (req, res) => {

    try {
        
        const posts = await Post.find().populate({
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

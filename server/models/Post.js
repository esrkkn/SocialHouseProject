const mongoose = require('mongoose')
const {Schema} = mongoose

const postSchema = new Schema({

owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
},
title: {
    type: String,
    require: true
},
location: {
    type: String,
    require: true
},
rooms: {
    type: String,
    require: true
},
description: {
    type: String
},
price: {
    type: String,
    require: true
},
rent: {
    type: Boolean
},
sale: {
    type: Boolean
},
image: {
    type: String
}

})

const Post = mongoose.model('Post', postSchema)

module.exports = Post

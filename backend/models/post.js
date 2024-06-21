const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
    {
        Content: {type: String, required: true},
        Attacthments: {type: String, required: false},
        Author: { type: Schema.Types.ObjectId, ref: 'UserID'},
        Likes: {type: Number, required: true},
        Comments: {type: String, required: true}
    }, 
    {timestamps: true}
)
module.exports = mongoose.model('posts', Post)
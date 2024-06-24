const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
    {
        Content: {type: String, required: true},
        Attachments: {type: String, required: false},
        Author: { type: Schema.Types.ObjectId, ref: 'UserID'},
        Likes: {type: Number, required: true},
        Comments: {type: String, required: false}
    }, 
    {timestamps: true}
)
module.exports = mongoose.model('posts', Post)
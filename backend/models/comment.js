const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
    {
        Content: {type: String, required: true},
        Author: {type: Schema.Types.ObjectId, ref: 'UserID'},
        ParentPost: {type: Schema.Types.ObjectId, ref: 'ParentPostID'},
        Likes: {type: Number, required: true}
    }, 
    {timestamps: true}
)

module.exports = mongoose.model('comments', Comment)
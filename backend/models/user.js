const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        Username: {type: String, required: true},
        Password: {type: String, required: true},
        Picture: {type: String, required: false},
        Email: {type: String, required: true},
        Bio: {type: String, required: false},
        Followers: {type: Number, required: true},
        Following: {type: Number, required: true},
        IsPrivate: {type: Boolean, required: false},
        Token: {type: String, required: false}
    }, 
    {timestamps: true}
)

module.exports = mongoose.model('users', User)
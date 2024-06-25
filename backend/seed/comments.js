const db = require('../db')
const User = require('../models/user')
const Post = require('../models/post')
const Comment = require('../models/comment')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const Jo = await User.find({ Username: 'JoSlempa' })
    const joPost = await Post.find({ Author: Jo[0]._id})

    const comments = [
        {
            Content: 'Happy Birthday, Enjoy!!!',
            Author: Grace[0]._id,
            ParentPost: joPost[0]._id,
            Likes: 10,
        }
    ]

    await Comment.insertMany(comments)
    console.log('Created Users!')
}

const run = async () => {
    await main()
    db.close()
}

run()
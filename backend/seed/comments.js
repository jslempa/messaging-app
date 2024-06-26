const db = require('../db')
const User = require('../models/user')
const Post = require('../models/post')
const Comment = require('../models/comment')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const Jo = await User.find({ Username: 'JoSlempa' })
    const joPost = await Post.find({ Author: Jo[0]._id})
    const Grace = await User.find({ Username: 'GraceMadikaegbu' })
    const gracePost = await Post.find({ Author: Grace[0]._id})
    const Tobias = await User.find({ Username: 'TobiasDodge' })
    const tobiasPost = await Post.find({ Author: Tobias[0]._id})
    const Darnell = await User.find({ Username: 'DarnellRaymond' })
    const darnellPost = await Post.find({ Author: Darnell[0]._id})

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
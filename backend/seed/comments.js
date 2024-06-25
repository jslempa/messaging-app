const db = require('../db')
const User = require('../models/user')
const Post = require('../models/post')
const Comment = require('../models/comment')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const Jo = await User.find({ Username: 'JoSlempa' })
    const Grace = await User.find({ Username: 'GraceMadikaegbu' })
    const Darnell = await User.find({ Username: 'DarnellRaymond'})
    const Tobias = await User.find({ Username: 'TobiasDodge'})
    const joPost = await Post.find({ Author: Jo[0]._id})
    const gracePost = await Post.find({ Author: Grace[0]._id})
    const darnellPost = await Post.find({ Author: Darnell[0]._id})
    const tobiasPost = await Post.find({ Author: Tobias[0]._id})

    const comments = [
        {
            Content: "Happy Birthday, Enjoy!!!",
            Author: Grace[0]._id,
            ParentPost: joPost[0]._id,
            Likes: 10,
        },
        {
            Content: "I ain't reading all that",
            Author: Jo[0]._id,
            ParentPost: tobiasPost[0]._id,
            Likes: 10,
        },
        {
            Content: "I'm happy for you tho",
            Author: Jo[0]._id,
            ParentPost: tobiasPost[0]._id,
            Likes: 10,
        },
        {
            Content: "Or sorry that happened",
            Author: Jo[0]._id,
            ParentPost: tobiasPost[0]._id,
            Likes: 10,
        },
        {
            Content: "Loved that book too!",
            Author: Tobias[0]._id,
            ParentPost: darnellPost[0]._id,
            Likes: 10,
        },
        {
            Content: "Crazy what AI can do now",
            Author: Darnell[0]._id,
            ParentPost: gracePost[0]._id,
            Likes: 10,
        },
    ]

    await Comment.insertMany(comments)
    console.log('Created Users!')
}

const run = async () => {
    await main()
    db.close()
}

run()
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
        },{
            Content: 'Great initiative! Use netting to keep squirrels out. 1',
            Author: Grace[0]._id,
            ParentPost: Tobias[0]._id,
            Likes: 5,
        },
        {
            Content: 'Japan is amazing! You will love it. 2',
            Author: Darnell[0]._id,
            ParentPost: Jo[0]._id,
            Likes: 8,
        },
        {
            Content: 'AI is evolving so fast, exciting times ahead! 3',
            Author: Tobias[0]._id,
            ParentPost: Grace[0]._id,
            Likes: 12,
        },
        {
            Content: 'Atomic Habits changed my life too! 4',
            Author: Jo[0]._id,
            ParentPost: Darnell[0]._id,
            Likes: 7,
        },
        {
            Content: 'Try using chili powder to deter squirrels. 5',
            Author: Darnell[0]._id,
            ParentPost: Tobias[0]._id,
            Likes: 6,
        },
        {
            Content: 'Solo trips are the best way to explore! 6',
            Author: Grace[0]._id,
            ParentPost: Jo[0]._id,
            Likes: 9,
        },
        {
            Content: 'Can’t wait to see what AI brings next! 7',
            Author: Jo[0]._id,
            ParentPost: Grace[0]._id,
            Likes: 10,
        },
        {
            Content: 'Building good habits is key to success. 8',
            Author: Tobias[0]._id,
            ParentPost: Darnell[0]._id,
            Likes: 15,
        },
        {
            Content: 'Organic methods are best for gardening. 9',
            Author: Grace[0]._id,
            ParentPost: Tobias[0]._id,
            Likes: 11,
        },
        {
            Content: 'Make sure to visit Kyoto! 10',
            Author: Tobias[0]._id,
            ParentPost: Jo[0]._id,
            Likes: 20,
        },
        {
            Content: 'AI will revolutionize our lives! 11',
            Author: Darnell[0]._id,
            ParentPost: Grace[0]._id,
            Likes: 13,
        },
        {
            Content: 'I found "Atomic Habits" very practical. 12',
            Author: Grace[0]._id,
            ParentPost: Darnell[0]._id,
            Likes: 17,
        },
        {
            Content: 'Check out companion planting to deter pests. 13',
            Author: Jo[0]._id,
            ParentPost: Tobias[0]._id,
            Likes: 18,
        },
        {
            Content: 'Sushi in Japan is a must-try experience! 14',
            Author: Tobias[0]._id,
            ParentPost: Jo[0]._id,
            Likes: 21,
        },
        {
            Content: 'AI advancements are mind-blowing! 15',
            Author: Grace[0]._id,
            ParentPost: Grace[0]._id,
            Likes: 19,
        },
        {
            Content: 'Changing habits is the first step to improvement. 16',
            Author: Darnell[0]._id,
            ParentPost: Darnell[0]._id,
            Likes: 23,
        },
        {
            Content: 'Bird feeders can attract squirrels away from plants. 17',
            Author: Tobias[0]._id,
            ParentPost: Tobias[0]._id,
            Likes: 16,
        },
        {
            Content: 'Enjoy your adventure in Japan! 18',
            Author: Jo[0]._id,
            ParentPost: Tobias[0]._id,
            Likes: 22,
        },
        {
            Content: 'Future technology is so exciting! 19',
            Author: Darnell[0]._id,
            ParentPost: Grace[0]._id,
            Likes: 25,
        },
        {
            Content: 'Habits make or break you. 20',
            Author: Grace[0]._id,
            ParentPost: Darnell[0]._id,
            Likes: 30,
        },
        {
            Content: 'Use raised beds to protect from pests. 21',
            Author: Jo[0]._id,
            ParentPost: Tobias[0]._id,
            Likes: 29,
        },
        {
            Content: 'You will love the culture in Japan. 22',
            Author: Grace[0]._id,
            ParentPost: Tobias[0]._id,
            Likes: 32,
        },
        {
            Content: 'AI is the future, so much potential! 23',
            Author: Tobias[0]._id,
            ParentPost: Grace[0]._id,
            Likes: 27,
        },
        {
            Content: 'Reading "Atomic Habits" was a turning point. 24',
            Author: Darnell[0]._id,
            ParentPost: Darnell[0]._id,
            Likes: 34,
        },
        {
            Content: 'Gardening is so therapeutic, enjoy! 25',
            Author: Grace[0]._id,
            ParentPost: Tobias[0]._id,
            Likes: 33,
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
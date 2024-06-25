const db = require('../db')
const Post = require('../models/post')
const User = require('../models/user')
const Comments = require('../models/comment')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const Tobias = await User.find({ Username: 'TobiasDodge' })
    const Jo = await User.find({ Username: 'JoSlempa' })
    const Grace = await User.find({ Username: 'GraceMadikaegbu' })
    const Darnell = await User.find({ Username: 'DarnellRaymond' })

    const posts = [
        {
            Content: 'Just hit 20 and finally decided to start that vegetable garden Ive always talked about. 🌱🍅 Anyone got tips on keeping the squirrels out? #GardeningLife #UrbanFarming',
            Attachments: '',
            Author: Tobias[0]._id,
            Likes: 0
        },
        {
            Content: 'Celebrated my 30th by booking a solo trip to Japan! Cant wait to explore the temples and try all the sushi. 🍣✈️ #TravelGoals #30AndThriving',
            Attachments: '',
            Author: Jo[0]._id,
            Likes: 0
        },
        {
            Content: 'Who else is excited about the new AI advancements? Spent the whole evening reading about the potential of GPT-4. 🤖📚 The future is here! #TechGeek #AIRevolution',
            Attachments: '',
            Author: Grace[0]._id,
            Likes: 0
        },
        {
            Content: 'Finally got around to reading "Atomic Habits" and its a game changer. 🧠📖 Time to build some good habits and break the bad ones! #BookRecommendations #SelfImprovement',
            Attachments: '',
            Author: Darnell[0]._id,
            Likes: 0
        },
    ]

    await Post.insertMany(posts)
    console.log('Created Posts!')
}

const run = async () => {
    await main()
    db.close()
}

run()
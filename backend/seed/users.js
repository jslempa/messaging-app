const db = require('../db')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const users = [
        {
            Username: 'TobiasDodge',
            Password: 'PasswordIsAGoodPassword',
            Picture: '',
            Email: 'TobiasDodge@email.com',
            Bio: 'This is a fake account! For TobiasDodge',
            Followers: 30,
            Following: 40,
            IsPrivate: false
        },
        {
            Username: 'JoSlempa',
            Password: 'CompletelySecure',
            Picture: '',
            Email: 'JoSlempa@email.com',
            Bio: 'This is a fake account! For JoSlempa',
            Followers: 30,
            Following: 40,
            IsPrivate: false
        },
        {
            Username: 'GraceMadikaegbu',
            Password: 'MaybeThisPasswordWouldBeGood',
            Picture: '',
            Email: 'GraceMadikaegbu@email.com',
            Bio: 'This is a fake account! For GraceMadikaegbu',
            Followers: 30,
            Following: 40,
            IsPrivate: false
        },
        {
            Username: 'DarnellRaymond',
            Password: 'IncrediblyAmazingPassword',
            Picture: '',
            Email: 'DarnellRaymond@email.com',
            Bio: 'This is a fake account! For DarnellRaymond',
            Followers: 30,
            Following: 40,
            IsPrivate: false
        }
    ]

    await User.insertMany(users)
    console.log('Created Users!')
}

const run = async () => {
    await main()
    db.close()
}

run()
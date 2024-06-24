const User = require('../models/user')

const createUser = async (req, res) => {
    // TODO: Implement this function
}

const authenticateUser = async (req, res) => {
    try {
        const {username, password} = req.body
        const user = await User.findOne({Username: username, Password: password})

        if(!user) {
            return res.status(404).json({error: 'User not found'})
        }

        const tempToken = `${user._id}:${user.Username}:${Date.now()}`

        const updatedUser = await User.findByIdAndUpdate(user._id, {Token: tempToken})

        return res.status(200).json({token: tempToken})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    createUser,
    authenticateUser
}
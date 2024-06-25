const User = require('../models/user')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({IsPrivate: false})
        res.json(users)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getUserByName = async (req, res) => {
    try {
        const { username } = req.params
        const user = await User.findOne({Username: username})
        
        if(!user) {
            return res.status(404).send('User not found')
        }

        if(user.IsPrivate) {
            return res.status(401).send('User is private')
        } else {
            return res.json({Username: user.Username, Followers: user.Followers, Following: user.Following, Bio: user.Bio})
        }

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getPrivateUsers = async (req, res) => {
    try {
        const users = await User.find({IsPrivate: true})
        res.json(users)
    } catch (error) {
        return res.status(500).send(error.message)
    }

}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndUpdate(id, req.body, { new: true})
        if (user) {
            return res.status(200).json(user)
        }

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("User deleted")
        }
        throw new Error("User not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createUser = async (req, res) => {
    try {
        const {username, password, email, isPrivate} = req.body
        const user = await User.create({Username: username, Password: password, Email: email, Followers: 0, Following: 0, IsPrivate: isPrivate})

        return res.status(201).json({user})
    
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
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
    authenticateUser,
    getAllUsers,
    getUserByName,
    getPrivateUsers,
    updateUser,
    deleteUser
}
const User = require('../backend/models/user')

const createUser = async (req, res) => {
    
}

const authenticateUser = async (req, res) => {
    // essentially, if password != user.password return a 401 (HTTP code for authentication error)
}

module.exports = {
    createUser
}
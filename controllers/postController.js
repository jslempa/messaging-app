const Post = require('../backend/models/post')

const Post = require('../models/post');

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllPosts
   
}
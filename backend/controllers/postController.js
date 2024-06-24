const Post = require('../models/post');

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getPostsById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id)
        if (post) {
            return res.json(post);
        }
        return res.status(404).send('Actor with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createPost = async (req, res) => {
    try {
        const post = await new Actor(req.body)
        await post.save()
        return res.status(201).json({
            post,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Post.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Actor deleted");
        }
        throw new Error("Actor not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const updatePost = async (req, res) => {
    try {
        let { id } = req.params;
        let post = await Post.findByIdAndUpdate(id, req.body, { new: true })
        if (post) {
            return res.status(200).json(post)
        }
        throw new Error("Actor not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}




module.exports = {
    getAllPosts,
    getPostsById,
    createPost,
    deletePost,
    updatePost
   
}

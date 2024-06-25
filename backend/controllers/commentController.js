const Comment = require('../models/comment')

const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find()
        res.json(comments)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getCommentById = async (req, res) => {
    try {
        const { id } = req.params
        const comment = await Comment.findById(id)
        if (comment) {
            return res.json(comment)
        }
        return res.status(404).send('Comment not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getCommentsByParentPost = async (req, res) => {
    try {
        const { parentPostId } = req.params
        const comments = await Comment.find({ParentPost: parentPostId})
        if (comments) {
            return res.json(comments)
        }
        return res.status(404).send('Comments not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createComment = async (req, res) => {
    try {
        const comment = await new Comment(req.body)
        await comment.save()
        return res.status(201).json({
            comment,
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateComment = async (req, res) => {
    try {
        let { id } = req.params
        let comment = await Comment.findByIdAndUpdate(id, req.body, {new: true})
        if (comment) {
            return res.status(200).json(comment)
        }
        throw new Error('Comment not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteComment = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Comment.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Comment deleted')
        }
        throw new Error('Comment not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllComments,
    getCommentById,
    getCommentsByParentPost,
    createComment,
    updateComment,
    deleteComment
}
const express = require('express')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const postController = require('./controllers/postController')
const commentController = require('./controllers/commentController')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server is running!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.get('/posts', postController.getAllPosts)
app.get('/posts/:id', postController.getPostsById)
app.post('/posts', postController.createPost)
app.delete('/post/:id', postController.deletePost)

app.get('/comments', commentController.getAllComments)
app.get('/comments/:id', commentController.getCommentById)
app.post('/comments', commentController.createComment)
app.put('/comments/:id', commentController.updateComment)
app.delete('/comments/:id', commentController.deleteComment)
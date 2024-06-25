const express = require('express')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const postController = require('./controllers/postController')
const commentController = require('./controllers/commentController')
const userController = require('./controllers/userController')

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

app.post('/login', userController.authenticateUser)
app.get('/users', userController.getAllUsers)
app.get('/users/:username', userController.getUserByName)
app.post('/users', userController.createUser)
app.put('/users/:id', userController.updateUser)
app.get('/privateUsers', userController.getPrivateUsers)
app.delete('/users/:id', userController.deleteUser)
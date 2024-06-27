import axios from 'axios'
import Likes from './Likes'
import Comments from './Comments'
import CommentModal from './CommentModal'
import { useState, useEffect } from 'react'

const SinglePost = (props) => {

    console.log(props.post._id)

    const [author, setAuthor] = useState('')

    const addLike = async () => {
        let currentLikes = props.post.Likes
        const res = await axios.put(`http://localhost:3001/posts/${props.post._id}`, {
            Likes: currentLikes + 1
        })
        window.location.reload()
    }

    const deletePost = async () => {
        await axios.delete(`http://localhost:3001/post/${props.post._id}`)
        console.log('post deleted')
    }

    const formatAuthor = async () => {
        const res = await axios.get(`http://localhost:3001/users/id/${props.post.Author}`)
        setAuthor(res.data.Username)
        console.log(author)
    }

    useEffect(() => {
        formatAuthor()
    }, [])

    return (
        <div className='single-post'>
            <div className='post-single-card' style={{border: '2px solid black'}}>
                <h3 className='post-author'>{author}</h3>
                <p className='post-content'>{props.post.Content}</p>
                {props.post.Attachments ? <img className='post-image' src={props.post.Attachments}/> : null}
                <Likes likes={props.post.Likes}
                       addLike={addLike} />
                <Comments postId={props.post._id}/>    
                <CommentModal postId={props.post._id}/>
                <button onClick={deletePost}>Delete Post</button>
            </div> 
        </div>
    )
}

export default SinglePost
import { useState, useEffect } from 'react'
import axios from 'axios'
import './CommentModal.css'

const CommentModal = (props) => {

    const [commentContent, setCommentContent] = useState('')
    let userid = localStorage.getItem('userid')

    const handlePost = async (e) => {
        e.preventDefault()

        const response = await axios.post('http://localhost:3001/comments',
            {
                Content: commentContent,
                Author: userid,
                ParentPost: props.postId,
                Likes: 0
            }
        )

        console.log("Maybe worked?")
    }

    const handleComment = (e) => {
        setCommentContent(e.target.value)
    }

    const handleUser = (e) => {
        setUserID(e.target.value)
    }

    return (
        <div className='comment-component'>
            <div className='comment-card'>
                <form onSubmit={handlePost}>
                    <input
                    type='text'
                    placeholder='Comment'
                    value={commentContent}
                    onChange={handleComment}
                    />

                    <button type='submit'>Comment</button>
                </form>
            </div>
        </div>
    )

}

export default CommentModal
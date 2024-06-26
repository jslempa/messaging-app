import { useState, useEffect } from 'react'
import axios from 'axios'
import './PostModal.css'

const PostModal = ({isOpen, onClose}) => {
    if (!isOpen) return null

    const [postContent, setPostContent] = useState('')
    const [userID, setUserID] = useState('')

    const handlePost = async (e) => {
        e.preventDefault()

        const response = await axios.post('http://localhost:3001/posts', 
            {
                Content: postContent,
                Attachments: "",
                Author: userID,
                Likes: 0,
                Comments: []
            })

        console.log(postContent)
        console.log(userID)
        onClose()
    }

    const handleChange = (e) => {
        setPostContent(e.target.value)
    }

    const handleUser = (e) => {
        setUserID(e.target.value)
    }

    return (
        <div className='post-modal'>
            <div className='card'>
                <form onSubmit={handlePost}>
                    <input type="text" 
                    placeholder='User ID'
                    value={userID}
                    onChange={handleUser}
                    />

                    <textarea placeholder='Content' 
                    value={postContent}
                    onChange={handleChange}
                    />

                    <button type='submit'>Post</button>
                    <button type='button' onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default PostModal
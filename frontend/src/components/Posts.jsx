import { useState, useEffect } from 'react'
import axios from 'axios'
import Likes from './Likes'
import Comments from './Comments'

const Posts = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const res = await axios.get(`${BASE_URL}`)
            setPosts(res)
        }
        getPosts()
    }, [])
    
    return posts ? (
        <div className='posts'>
            {
                posts.map((post) => { 
                    <div className='post-single-card'>
                        <h2 className='post-author'>{post.Author}</h2>
                        <p className='post-content'>{post.Content}</p>
                        {post.Attachments ? <img className='post-image' src={post.Attachments}/> : null}
                    </div>
                
                })
            }   
        </div>
    ) : null
}

export default Posts

// http://127.0.0.1:3001
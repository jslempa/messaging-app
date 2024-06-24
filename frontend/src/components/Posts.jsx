import { useState, useEffect } from 'react'
import axios from 'axios'
import Likes from './Likes'
import Comments from './Comments'

const Posts = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const res = await axios.get('http://localhost:3001/posts')
            const currentPosts = res.data
            console.log(currentPosts)
            setPosts(currentPosts)
            //console.log(posts) posts empty here
        }
        getPosts()
        //console.log(posts) posts empty here
    }, [])

    const addLike = () => {

    } 

    console.log(posts) //posts populated here 
    
    return (
        <div className='posts'>
            {
                posts.map((post) => ( 
                    <div className='post-single-card' key={post._id}
                        style={{border: '2px solid black'}}>
                        <h3 className='post-author'>{post.Author}</h3>
                        <p className='post-content'>{post.Content}</p>
                        {post.Attachments ? <img className='post-image' src={post.Attachments}/> : null}
                        <Likes likes={post.Likes}
                               addLike={addLike}/>
                        {/* <Comments/>        */}
                    </div>                
                ))
            }   
        </div>
    )
}

export default Posts

// http://127.0.0.1:3001
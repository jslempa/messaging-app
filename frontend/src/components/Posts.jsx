import { useState, useEffect } from 'react'
import axios from 'axios'
import SinglePost from './SinglePost'

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
                    <SinglePost post={post}
                                key={post._id}/>                
                ))
            }   
        </div>
    )
}

export default Posts

// http://127.0.0.1:3001
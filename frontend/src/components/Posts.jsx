import { useState, useEffect } from 'react'
import axios from 'axios'
import SinglePost from './SinglePost'

const Posts = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const res = await axios.get(`http://localhost:3001/${props.endpoint}`)
            const currentPosts = res.data
            setPosts(currentPosts)
            //console.log(posts) posts empty here
        }
        getPosts()
        //console.log(posts) posts empty here
    }, []) //putting posts in here makes the like button work but it runs an infinite GET loop

    //console.log(posts) //posts populated here 
    
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

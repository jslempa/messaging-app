import axios from 'axios'
import Likes from './Likes'
import Comments from './Comments'
import { useState } from 'react'

const SinglePost = (props) => {

    console.log(props.post)

    // const [author, setAuthor] = useState('')

    // const getAuthor = async () => {
    //     let postAuthor = await axios.get(`http://localhost:3001/users/${props.post.Author}`)
    //     setAuthor(postAuthor)
    // }

    const addLike = async () => {
        let currentLikes = props.post.Likes
        //console.log(currentLikes)
        const res = await axios.put(`http://localhost:3001/posts/${props.post._id}`, {
            Likes: currentLikes + 1
        })
    } 

    return (
        <div className='single-post'>
            <div className='post-single-card' style={{border: '2px solid black'}}>
                <h3 className='post-author'>{props.post.Author}</h3>
                <p className='post-content'>{props.post.Content}</p>
                {props.post.Attachments ? <img className='post-image' src={props.post.Attachments}/> : null}
                <Likes likes={props.post.Likes}
                       addLike={addLike} />
                <Comments/>       
            </div> 
        </div>
    )
}

export default SinglePost
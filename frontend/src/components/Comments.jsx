import axios from 'axios'
import { useState, useEffect } from 'react'

const Comments = (props) => {

    //console.log(props.postId)

    const [comments, setComments] = useState([])

    const [postId, setPostId] = useState('')
    
    //console.log(postId)

    useEffect(() => {

        setPostId(props.postId)

        const getComments = async () => {
            //const res = await axios.get(`http://localhost:3001/comments/${props.postId}`)
            const res = await axios.get(`http://localhost:3001/comments`)
            const currentComments = res.data
            setComments(currentComments)
        }
        getComments()
    },[])

    console.log(postId)
    console.log(comments)

    return (
        <div className='comments'>
            <p>{}</p>
        </div>
        
    )
}

export default Comments
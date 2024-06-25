import axios from 'axios'
import { useState, useEffect } from 'react'

const Comments = (props) => {

    const [comments, setComments] = useState([])

    //const [postId, setPostId] = useState('')

    useEffect(() => {

        //setPostId(props.postId)

        const getComments = async () => {
            const res = await axios.get(`http://localhost:3001/comments/parent/${props.postId}`)
            // const res = await axios.get(`http://localhost:3001/comments`)
            console.log(res)
            const currentComments = res.data
            setComments(currentComments)
    //         // const allComments = res.data
    //         // const relevantComments = allComments.filter((comment) => comment.ParentPost == postId)
    //         // setComments(relevantComments)
        }
        getComments()
    },[])

    //console.log(postId)
    console.log(comments)

    return (
        <div className='comments'>
            <ul className='comments-list'
            style={{listStyleType: 'none'}}>
                {
                    comments.map((comment) => (
                        <li className='single-comment'
                            key={comment._id}>
                        {comment ? comment.Content : null}
                        </li>
                    ))
                }
            </ul>
        </div>
        
    )}

export default Comments
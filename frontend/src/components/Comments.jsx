import axios from 'axios'
import { useState, useEffect } from 'react'

const Comments = (props) => {

    const [comments, setComments] = useState([])
    const [authors, setAuthors] = useState({})

    const getComments = async () => {
        try {
            const res = await axios.get(`http://localhost:3001/comments/parent/${props.postId}`)
            console.log(res)
            const currentComments = res.data
            setComments(currentComments)
            await getAuthors(currentComments)
        } catch (error) {
            alert("Error getting comments")
        }
    }

    const getAuthors = async (comments) => {
        const authorsData = {};
        await Promise.all(comments.map(async (comment) => {
            try {
                const res = await axios.get(`http://localhost:3001/users/id/${comment.Author}`)
                authorsData[comment._id] = res.data.Username
            } catch (error) {
                console.error("Error fetching author:", error)
            }
        }))
        setAuthors(authorsData)
    }

    useEffect(() => {

        getComments()
    },[])
    console.log(comments)

    return (
        <div className='comments'>
            <ul className='comments-list'
            style={{listStyleType: 'none'}}>
                {
                    comments.map((comment) => (
                        <li className='single-comment'
                            key={comment._id}
                            style={{border: '2px solid black'}}>
                        {authors[comment._id]}: {comment ? comment.Content : null}
                        </li>
                    ))
                }
            </ul>
        </div>
        
    )}

export default Comments
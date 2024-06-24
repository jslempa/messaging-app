import axios from 'axios'
import Likes from './Likes'
import Comments from './Comments'

const SinglePost = (props) => {

    console.log(props.post)

    return (
        <div className='single-post'>
               <div className='post-single-card' style={{border: '2px solid black'}}>
                        <h3 className='post-author'>{props.post.Author}</h3>
                        <p className='post-content'>{props.post.Content}</p>
                        {props.post.Attachments ? <img className='post-image' src={props.post.Attachments}/> : null}
                        <Likes likes={props.post.Likes}
                               />
                        {/* <Comments/>        */}
                    </div> 
        </div>
    )
}

export default SinglePost

// addLike={addLike}
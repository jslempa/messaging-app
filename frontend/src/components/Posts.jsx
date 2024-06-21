import Likes from './Likes'
import Comments from './Comments'

const Posts = (props) => {

    return (
        <div className="posts">
            <Likes/>
            <Comments/>
        </div>
    )
}

export default Posts
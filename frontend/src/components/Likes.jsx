import './Like.css'

const Likes = (props) => {

    //console.log(props)

    return (
        <div className='likes'>
            <div className='num-likes'>Likes: {props.likes}</div>
            <div>

                <button className='add-like-button'
                        onClick = {props.addLike}>
                        <span>+</span>Like</button>
            </div>
        </div>
    )
}

export default Likes
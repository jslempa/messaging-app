const Likes = (props) => {

    console.log(props)

    return (
        <div className='likes'>
            <div className='num-likes'>Likes: {props.likes}</div>
            <div>
            <label>+</label>
            <button className='add-like-button'
                    onClick = {props.addLike}>Like</button>
            </div>
        </div>
    )
}

export default Likes
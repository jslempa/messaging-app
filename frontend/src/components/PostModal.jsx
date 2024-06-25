import { useState, useEffect } from 'react'
import './Post'

const PostModal = () => {


    return (
        <div className='post-modal'>
            <form>
                <textarea placeholder='Content' />
                <button type='submit'>Post</button>
            </form>
        </div>
    )
}

export default PostModal
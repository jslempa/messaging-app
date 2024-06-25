import { useState, useEffect } from 'react'
import './PostModal.css'

const PostModal = () => {


    return (
        <div className='post-modal'>
            <div className='card'>
                <form>
                    <textarea placeholder='Content' />
                    <button type='submit'>Post</button>
                </form>
            </div>
        </div>
    )
}

export default PostModal
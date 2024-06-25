import { useState, useEffect } from 'react'
import './PostModal.css'

const PostModal = ({isOpen, onClose}) => {
    if (!isOpen) return null

    return (
        <div className='post-modal'>
            <div className='card'>
                <form>
                    <textarea placeholder='Content' />
                    <button type='submit'>Post</button>
                    <button type='button' onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default PostModal
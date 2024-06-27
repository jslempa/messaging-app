import { useState } from 'react'
import Posts from '../components/Posts'
import Main from '../components/Main'
import './HomeUser.css'

const HomePage = (props) => {


    return (
        <div className='home'>
    
            <Main />
            <Posts endpoint="posts/"/>
        </div>
    )
}

export default HomePage
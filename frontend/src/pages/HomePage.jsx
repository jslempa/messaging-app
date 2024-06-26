import { useState } from 'react'
import Posts from '../components/Posts'
import Main from '../components/Main'

const HomePage = (props) => {


    return (
        <div className='home'>
            <h2>Home</h2>
            <Main />
            <Posts endpoint="posts/"/>
        </div>
    )
}

export default HomePage
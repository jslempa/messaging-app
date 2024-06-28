import { useState, useEffect } from 'react'
import Posts from '../components/Posts'
import Main from '../components/Main'
import './HomeUser.css'
import { useNavigate } from 'react-router-dom'

const HomePage = (props) => {

    const userToken = localStorage.getItem("token")
    const navigate = useNavigate()

    useEffect(() => {
        if(userToken == "") {
            navigate('/login')
        }
    }, [])

    return (
        <div className='home'>
    
            <Main />
            <Posts endpoint="posts/"/>
        </div>
    )
}

export default HomePage
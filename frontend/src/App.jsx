import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Likes from './components/Likes'
import Main from './components/Main'
import Posts from './components/Posts'
import Header from './components/Header'
import Layout from './components/layout'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
        setIsLoggedIn(true)
    }
}, [])

  const handleLogin = (loggedIn, username) => {
      setIsLoggedIn(loggedIn)
      setUserName(username)
  }
  
  return (
    <div className='app'>
        <Main/>
        <div className='app'>
            <Main />
            <Header isLoggedIn={isLoggedIn} />
            <Layout userName={userName} isLoggedIn={isLoggedIn} onLogin={handleLogin} />
        </div>
    </div>
  )
}

export default App

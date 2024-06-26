import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Likes from './components/Likes'
import Main from './components/Main'
import Posts from './components/Posts'
import Header from './components/Header'
import Home from './components/Home'
import Nav from './components/Nav'
import PostModal from './components/PostModal'
import UserProfile from './components/UserProfile'

import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'

function App() {

//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [userName, setUserName] = useState('')

//   useEffect(() => {
//     const token = localStorage.getItem('token')
//     if (token) {
//         setIsLoggedIn(true)
//     }
// }, [])

//   const handleLogin = (loggedIn, username) => {
//       setIsLoggedIn(loggedIn)
//       setUserName(username)
//   }
  

  return (
    
    <div className='app'>
     
      
      <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/userprofile" element={ <UserPage />} />
        </Routes>
        
    </div>
    
  )
}

export default App

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
     
      <Main/>
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/userprofile" element={ <UserProfile />} />
        </Routes>
        
    </div>
    
  )
}

export default App

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
  
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
      setIsModalOpen(true)
  }

  const closeModal = () => {
      setIsModalOpen(false)
  }

  return (
    <div className='app'>
      <Main>
      <button onClick={openModal}>Create Post</button>
      <PostModal isOpen={isModalOpen} onClose={closeModal}/>
      <Routes>
       <Route path="/" element={ <Home /> } />
      </Routes>
      </Main>      
    </div>
  )
}

export default App

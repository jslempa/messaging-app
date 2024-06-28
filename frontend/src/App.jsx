import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    
    <div className='app'>
     
      
      <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/userprofile" element={ <UserPage />} />
          <Route path="/login" element={ <LoginPage/> } />
        </Routes>
        
    </div>
    
  )
}

export default App

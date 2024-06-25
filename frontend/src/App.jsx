import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Likes from './components/Likes'
import Main from './components/Main'
import Posts from './components/Posts'
import Header from './components/Header'

function App() {


  
  return (
    <div className='app'>
        <Main/>
        <div className='app'>
            <Main />
            <Header/>
        </div>
    </div>
  )
}

export default App

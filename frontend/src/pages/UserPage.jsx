import { useState, useEffect } from 'react'
import axios from 'axios'
import profilePic from '../assets/images/profilePic.png'
import Nav from '../components/Nav'
import PostModal from '../components/PostModal'
import Posts from '../components/Posts'
import './UserPage.css'


const UserPage = ({ token }) => {
    const [user, setUser] = useState([])
    const [error, setError] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    let userToken = localStorage.getItem("token")

    const openModal = () => {
        setIsModalOpen(true)
    }
  
    const closeModal = () => {
        setIsModalOpen(false)
    }

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/account`, {
                    headers: {
                      "Token": userToken
                    }
                  }
                )
                setUser(response.data)
                console.log(response.data._id)
            } catch (err) {
                setError(err.message)
            }
        };

        getUser()
    }, [token])
    
    console.log(user)

    if (error) {
        return <div>Error: {error}</div>
    }

    if (!user) {
        return <div>Loading...</div>
    }

    return (
        <div className="container">
          <div className='sidebar'>
            <Nav onOpenModal={openModal} />
          </div>
          <div className='main-content'>
            <PostModal isOpen={isModalOpen} onClose={closeModal} />
            <div className="profile-header">
              <div className="profile-pic">
                <img src={profilePic} alt="User Profile" />
              </div>
              <div className="user-info">
                <h2>{user.Username}</h2>
                <p>{user.Email}</p>
                <p className="bio">{user.Bio}</p>
                <div className="followers-following">
                  <span>Followers: {user.Followers}</span>
                  <span>Following: {user.Following}</span>
                </div>
              </div>
            </div>
            <div className='posts-container'>
            {user._id ? <Posts endpoint={`posts/author/${user._id}`} /> : <div>Loading posts...</div>}
            </div>
          </div>
        </div>
      )

    }
      

export default UserPage
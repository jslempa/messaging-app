import React, { useState, useEffect } from 'react'
import axios from 'axios'
import profilePic from '../assets/images/profilePic.png'



const UserProfile = ({ userId }) => {
    const [user, setUser] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const getUser = async () => {
            try {
                // const response = await axios.get(`http://localhost:3001/users/id/${userId}`); 667accc9d3c2e55073561cb6
                const response = await axios.get(`http://localhost:3001/users/id/667accc9d3c2e55073561cb6`)
                setUser(response.data)
            } catch (err) {
                setError(err.message)
            }
        };

        getUser()
    }, [userId])
console.log(user)
    if (error) {
        return <div>Error: {error}</div>
    }

    if (!user) {
        return <div>Loading...</div>
    }

    return (
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
        
    );
};

export default UserProfile
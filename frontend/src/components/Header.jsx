import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Header = ({ userId }) => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/users/id/${userId}`);
                setUser(response.data);
            } catch (err) {
                setError(err.message);
            }
        };

        getUser();
    }, [userId]);
console.log(user)
    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-header">
            <div className='user' key={user._id}>
                <h2>{user.Username}</h2>
                <p>{user.Email}</p>
                <p>{user.Bio}</p>
                <div className='follower'>
                    <span>Followers: {user.Followers}</span>
                    <span>Following: {user.Following}</span>
                </div>
            </div>
        </div>
    );
};

export default Header
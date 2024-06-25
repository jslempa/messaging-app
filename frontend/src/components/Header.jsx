
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Header = (props) => {
    const [user, setUser] = useState();
    const [error, setError] = useState();
    
    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/users/:id`)
                const currentUser = response.data
                console.log(response.data)
                setUser(currentUser);
            } catch (err) {
                setError(err.message);
            }
        };
        
        getUser();
    }, [username]);
    
    console.log(user)
    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-header">
            {/* <img src={user.Picture} alt={`${user.username}'s profile`} /> */}
            <h1>{user.Username}</h1>
            <p>{user.Email}</p>
            <p>{user.Bio}</p>
            <div>
                <span>Followers: {user.Followers}</span>
                <span>Following: {user.Following}</span>
            </div>
        </div>
    );
};

export default Header;

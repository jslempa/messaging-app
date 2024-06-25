import React, { useState } from 'react'
import axios from 'axios'

const IsLoggedOut = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/login', { username, password })
            const { token, user } = response.data
            localStorage.setItem('token', token)
            props.onLogin(true, user.username)
        } catch (error) {
            console.error('Login error:', error)
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
};

export default IsLoggedOut

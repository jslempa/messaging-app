import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(username, password)

        const res = await axios.post('http://localhost:3001/login/', 
            {
                username: username, 
                password: password
            }
        ).catch((error) => {
            if(error.response.status == 401) {
                alert("You entered a wrong value")
            }
        })

        console.log(res.data.token)
        localStorage.setItem("token", res.data.token)
        navigate('/userprofile')
    }

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className='login-card'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={handleUsername}
                />

                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={handlePassword}
                />

                <button type='submit'>Login</button>
            </form>
            
        </div>
    )
}

export default LoginPage
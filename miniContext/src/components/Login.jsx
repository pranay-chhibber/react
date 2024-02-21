import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'
 
const Login = () => {

    const [username,setUsername] = useState('')
    const [password, setpassword] = useState('')
    
    const {setUser} = useContext(UserContext)

      const handeSubmit = (e) =>{
        e.preventDefault()
        setUser({username, password})
    }


  return (
    <div>
        <h1>Login</h1>
        <input type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value) }
         placeholder='Username' />
        <input type="text" 
        value={password}
        onChange={(e) => setUsername(e.target.value)} 
        placeholder='Password' />
        <button onClick={handeSubmit} >Submit</button>
    </div>
  )
}

export default Login
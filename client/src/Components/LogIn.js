import React, { useState, useContext } from 'react';
// import { UserContext } from '../context/user';

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
 
  const handleSubmit = (e) => {
      e.preventDefault()
      
      const user = {
          username: username,
          password
      }
     
      fetch('/login',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
      })
      .then(res => res.json())
      .then(json => {
          console.log(json)
          //login(user)
      })
  }
  return (
      <> 
      <h4>Login</h4>
      <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
      <label>Password</label>
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
      <button type="submit">Login!</button>
    </form>
    </>
  )
}

export default Login;
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
      })
  }
  return (
      <> 
      <h4>Login</h4>
      <form onSubmit={handleSubmit}>
      <label>
        Username

        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
       Password
  
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
     
      <input type="submit" value="Login!" />
    </form>
    </>
  )
}

export default Login;
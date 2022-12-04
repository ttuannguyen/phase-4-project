import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(UserContext);
  const nagivate = useNavigate();
 
  const handleSubmit = (e) => {
      e.preventDefault()
      
      const obj = {
          username: username,
          password
      }
     
      fetch('/login',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(obj)
      })
      .then(res => res.json())
      .then(user => {
          // console.log(user)
          login(user)
          nagivate('/home')
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
import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
 
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const userObj = {
        username,
        password
    }
  
    fetch('/login',{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(userObj)
    })
    .then(res => res.json())
    .then(user => {
        if(user.error) {
          setError(user.error)
          setUsername('')
          setPassword('')
      } else {
          login(user)
          navigate('/home')
      }
    })
  }

  return (
      <div id='login'> 
        {/* <h4>Login</h4> */}
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
          <button type="submit">Login!</button>
        </form>
        <p>{error}</p>
    </div>
  )
}

export default Login;
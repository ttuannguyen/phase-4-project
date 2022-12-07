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
    
    const user = {
        name: username,
        password
    }
  
    fetch('/login',{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(user => {
        if(user.error) {
          setError(user.error)
          // // reset
          setUsername('')
          setPassword('')
          // 
          // const errorItems = user.errors.map(e => <li key={e.id}>{e}</li>) 
          // setErrorsList(errorItems) 
      } else {
          login(user)
          navigate('/home')
      }
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
        <p>{error}</p>
    </>
  )
}

export default Login;
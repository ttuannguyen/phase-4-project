import React, { useState, useContext } from 'react';
// import { UserContext } from '../context/user';

const LogIn = ( { onLogin }) => {

  // const { user, setUser } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username})
    })
    // .then(res = res.json())
    // .then(user => onLogin(user));
  }

  return (
    <div>
      <header>NYC Adventures</header>
      <h3>Login</h3>
      <form onSubmit={handleSubmit} >
        <label>Username</label>
        <input 
          type='text'
          id='username'
          value={username} 
          onChange={e => setUsername(e.target.value)}
        /><br/>
        <label>Password</label>
        <input 
          type='text'
          id='password'
          value={password} 
          onChange={e => setPassword(e.target.value)}
        />
        <p>Don't have an account?</p>
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default LogIn
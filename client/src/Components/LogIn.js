import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

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
          navigate('/')
      }
    })
  }

  return (
      <div id='login'> 

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      
        <p>{error}</p>
    </div>
  )
}

export default Login;
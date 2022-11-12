import React, { useState, useContext } from 'react';
// import { UserContext } from '../context/user';

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
 
  const [errors, setErrors] = useState([])

  function onSubmit(e){
      e.preventDefault()
      const user = {
          username: username,
          password
      }
     
      fetch(`http://localhost:3000/login`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
      })
      .then(res => res.json())
      .then(json => {
          console.log(json)
          if(json.errors) setErrors(json.errors)
      })
  }
  return (
      <> 
      <form onSubmit={onSubmit}>
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
    {errors?errors.map(e => <div>{e}</div>):null}
      </>
  )
}

export default Login;
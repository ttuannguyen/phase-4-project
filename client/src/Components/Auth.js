import React, { useState } from 'react'

const Auth = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [login, setLogin] = useState('')
    const [errors, setErrors] = useState([])
    


    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            name: username,
            email,
            password
        }

        fetch('/users',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if(json.errors) setErrors(Object.entries(json.errors))
        })
    }

    return (
        <> 
          <h4>Signup</h4>
          <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
          <label>Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
          <label>Password</label>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
          <button type="submit">Sign up!</button>
        </form>
      </>
    )

}

export default Auth
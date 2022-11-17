import React, { useState } from 'react'

const Auth = () => {

    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    // const [login, setLogin] = useState('')
    // const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        // const user = {
        //     username,
        //     password
        // }

        fetch('/users',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(json => console.log(json))
    }

    return (
        <> 
        <h4>Signup</h4>
        <form>
        <label>
          Username
  
          <input type="text"/>
        </label>
        {/* <label>
          Email
  
          <input type="text"/>
        </label> */}
        <label>
         Password
    
        <input type="password" />
        </label>
       
        <input type="submit" value="Login!" />
      </form>
      </>
    )
}

export default Auth
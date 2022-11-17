import React from 'react'

const Auth = () => {

    const handleSubmit = () => {
        const user = {
        }

        fetch('/me',{
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
        <label>
          Email
  
          <input type="text"/>
        </label>
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
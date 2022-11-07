import React from 'react'

const LogIn = () => {
  return (
    <div>
      <header>NYC Adventures</header>
      <h3>Login</h3>
      <form>
        <label>Username</label>
        <input type="text" /><br/>
        <label>Password</label>
        <input type="text" />
        <p>Don't have an account?</p>
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default LogIn
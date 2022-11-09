import React, { useContext } from 'react';
import { UserContext } from '../context/user';

const LogIn = () => {

  const { user, setUser } = useContext(UserContext);

  const handleLogin = () => {
    if (user) {
      // setUser(null)
    } else {
      // setUser(defaultUser)
    }
  }
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
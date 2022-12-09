import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const {logout, loggedIn} = useContext(UserContext)
  const navigate = useNavigate()

  const logoutUser = () => {
    fetch('/logout', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    }) 
    .then(() => {
      logout() //call logout over in context, setting loggedIn to false
      navigate('/')
    })
  }
  
  if (loggedIn) {
    return (
      <div>
        <NavLink className='navlink' to='/home'>
          <button>Home</button>
        </NavLink>
        <NavLink className='navlink' to='/secret_spots'>
          <button>Your Secret Spots</button>
        </NavLink>
        <button onClick={logoutUser}>Logout</button>
      </div>
    )
  } else {
    return (
      <>
        <NavLink className='navlink' to='/login'>
          <button>Login</button>
        </NavLink>
        <NavLink className='navlink' to='/signup'>
          <button>Signup</button>
        </NavLink>
      </>
    )
  }
}

export default Navbar
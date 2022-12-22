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
      navigate('/')
      logout() //call logout over in context, setting loggedIn to false
    })
  }
  
  if (loggedIn) {
    return (
      <div className='nav-div'>
        <NavLink className='navlink' to='/home'>
          <button className='nav-btn'>Home</button>
        </NavLink>
        {/* <NavLink className='navlink' to='/secret_spots'>
          <button className='nav-btn'>Listings</button>
        </NavLink> */}
        <NavLink className='navlink' to='/my_secret_spots'>
          <button className='nav-btn'>Your Secret Spots</button>
        </NavLink>
        <button className='nav-btn' onClick={logoutUser}>Logout</button>
      </div>
    )
  } else {
    return (
      <div className='nav-div'>
        <NavLink className='navlink' to='/login'>
          <button className='nav-btn'>Login</button>
        </NavLink>
        <NavLink className='navlink' to='/signup'>
          <button className='nav-btn'>Signup</button>
        </NavLink>
      </div>
    )
  }
}

export default Navbar
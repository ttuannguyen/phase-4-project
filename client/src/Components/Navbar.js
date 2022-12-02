import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const {user, logout, loggedIn} = useContext(UserContext)
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
        <h4>This is your navbar, {user.name}</h4>
        <NavLink className='navlink' to='/secret_spots'>
          <button>Your Secret Spots</button>
        </NavLink>
        <button onClick={logoutUser}>Logout!</button>
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

  // return (
  //   <div>
  //     <NavLink className='navlink' to='/'>Home</NavLink>
  //     <NavLink className='navlink' to='/login'>Login</NavLink>
  //     <NavLink className='navlink' to='/signup'>Sign Up</NavLink>
  //     <button onClick={logoutUser}>Logout</button>
  //   </div>
  // )
}

export default Navbar
import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const {user, logout} = useContext(UserContext)

  const logoutUser = () => {
    fetch('/logout') 
    .then(() => {
      logout()
    })
  }
  
  if (user) {
    return (
      <div>
        <h4>Hello there, {user.name}</h4><br/>
        <button>Logout!</button>
      </div>
    )
  } else {
    return (
      <NavLink className='navlink' to='/login'>
        <button>Login</button>
      </NavLink>
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
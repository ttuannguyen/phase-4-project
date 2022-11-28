import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <NavLink className='navlink' to='/'>Home</NavLink>
      <NavLink className='navlink' to='/login'>Login</NavLink>
      <NavLink className='navlink' to='/signup'>Sign Up</NavLink>
    </div>
  )
}

export default Navbar
import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {

  const {logout, loggedIn} = useContext(UserContext)
  const navigate = useNavigate()

  const logoutUser = () => {
    fetch('/logout', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    }) 
    .then(() => {
      navigate('/')
      logout() 
    })
  }
  
  if (loggedIn) {
    return (
      <>
      <header>
      <Navbar bg="dark" variant="dark" expand="lg">
      {/* className="bg-body-tertiary" */}
      <Container>
        <Navbar.Brand href="/">Secret NYC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/my_secret_spots">My Secret Spots</Nav.Link>
            <button className='nav-btn' onClick={logoutUser}>Logout</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    </>
    )
  } else {
    return (
      <>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
        {/* className="bg-body-tertiary" */}
        <Container>
          <Navbar.Brand href="/">Secret NYC</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavLink className='navlink' to='/login'>
              <button className='nav-btn'>Login</button>
            </NavLink>
            <NavLink className='navlink' to='/signup'>
              <button className='nav-btn'>Signup</button>
            </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
      </header>

      </>
    )
  }
}

export default NavBar
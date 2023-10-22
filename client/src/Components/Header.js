import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {

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
      <header>
        <Navbar bg='dark' variant='dark' expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand href="/">Secret NYC</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
  
                <LinkContainer to='/home'>
                  <Nav.Link><i className="fa fa-house"></i> Home</Nav.Link>
                </LinkContainer>
  
                <LinkContainer to='/my_secret_spots'>
                  <Nav.Link><i className="fa-solid fa-map-location"></i> My Secret Spots</Nav.Link>
                </LinkContainer>
  
                <LinkContainer to='/logout'>
                  <Nav.Link onClick={logoutUser}><i className="fas fa-user"></i> Logout</Nav.Link>
                </LinkContainer>
  
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  } else {
    return (

      <header>
        <Navbar bg='dark' variant='dark' expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand href="/">Secret NYC</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

                <LinkContainer to='/login'>
                  <Nav.Link><i className="fas fa-user"></i> Login</Nav.Link>
                </LinkContainer>
  
                <LinkContainer to='/signup'>
                  <Nav.Link><i className="fas fa-user"></i> Signup</Nav.Link>
                </LinkContainer>
  
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }

  
}

export default Header
import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import Navbar from './Components/Navbar';
import UserSecretSpots from './Components/UserSecretSpots';
import { UserProvider } from './context/user';
import VisitEditForm from './Components/VisitEditForm';
import SecretSpotDetails from './Components/SecretSpotDetails';
// import Header from './components/Header';

const App = () => {

  
  return (
    <Container>
      <UserProvider>
        <Router>
            <h1>Secret NYC</h1>
            <p>Discover secret spots in NYC like a true New Yorker!</p>
            <Navbar />
          <Routes>
            <Route path="/visits/:id/edit" element={ <VisitEditForm /> }/>
            <Route path="/secret_spots/:id" element={ <SecretSpotDetails /> }/>
            <Route path="/secret_spots/:id" element={ <SecretSpotDetails /> }/>
            <Route exact path="/my_secret_spots" element={ <UserSecretSpots /> }/>
            <Route exact path="/signup" element={ <SignUp /> } />
            <Route exact path="/login" element={ <LogIn /> } />
            <Route exact path="/home" element={ <Home /> } />
          </Routes>
        </Router>
      </UserProvider>
    </Container>
  );
}

export default App;

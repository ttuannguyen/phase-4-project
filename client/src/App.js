import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import NavBar from './Components/NavBar';
import UserSecretSpots from './Components/UserSecretSpots';
import { UserProvider } from './context/user';
import VisitEditForm from './Components/VisitEditForm';
import SecretSpotDetails from './Components/SecretSpotDetails';
import Header from './Components/Header';

const App = () => {

  
  return (
      <UserProvider>
        <Router>
          <Header />
            <p>Discover secret spots in NYC like a true New Yorker!</p>
            {/* <NavBar /> */}
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
  );
}

export default App;

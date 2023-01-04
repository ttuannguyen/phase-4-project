import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Navbar from './components/Navbar';
import UserSecretSpots from './components/UserSecretSpots';
import { UserProvider } from './context/user';
import VisitEditForm from './components/VisitEditForm';
import SecretSpotDetails from './components/SecretSpotDetails';

const App = () => {

  
  return (
    <>
      <UserProvider>
        <Router>
          <h1>Secret NYC</h1>
          <p>Discover secret spots in NYC like a true New Yorker!</p>
          <Navbar />
          <Routes>
            <Route path="/visits/:id/edit" element={ <VisitEditForm /> }/>
            <Route path="/secret_spots/:id" element={ <SecretSpotDetails /> }/>
            <Route exact path="/my_secret_spots" element={ <UserSecretSpots /> }/>
            <Route exact path="/signup" element={ <SignUp /> } />
            <Route exact path="/login" element={ <LogIn /> } />
            <Route exact path="/home" element={ <Home /> } />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;

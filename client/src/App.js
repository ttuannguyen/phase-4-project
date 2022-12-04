// import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from './components/Auth';
import VisitAddForm from './components/VisitAddForm';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Navbar from './components/Navbar';
import SecretSpotsContainer from './components/SecretSpotsContainer';
import SecretSpot from './components/SecretSpot';
import { UserProvider } from './context/user';
// import { UserProvider } from './context/user';

const App = () => {

  
  // const addVisit = () => {
  //   fetch('/visits', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify()
  //   })
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  // }
  
  return (
    <>
      <UserProvider>
        <Router>
          <h2>NYC Adventures</h2>
          <p>Discover the secret spots in NYC like a true New Yorker!</p>
          <Navbar />
          <Routes>
            <Route exact path="/visits/new" element={ <VisitAddForm /> }/>
            <Route exact path="/secret_spots" element={ <SecretSpotsContainer /> }/>
            <Route exact path="/signup" element={ <Auth />} />
            <Route exact path="/login" element={ <LogIn />} />
            <Route exact path="/home" element={ <Home />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;

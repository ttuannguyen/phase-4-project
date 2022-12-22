import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp';
import VisitAddForm from './components/VisitAddForm';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Navbar from './components/Navbar';
import UserSecretSpots from './components/UserSecretSpots';
import { UserProvider } from './context/user';
import VisitEditForm from './components/VisitEditForm';
import SecretSpotDetails from './components/SecretSpotDetails';
// import { UserProvider } from './context/user';

const App = () => {

  const [secretSpots, setSecretSpots] = useState([]);
  const [visits, setVisits] = useState([]);


  // useEffect(() => {
  //   fetch('/secret_spots')
  //   .then(res => res.json())
  //   .then(data => {
  //     setSecretSpots(data)
  //   })
  //   // fetch('/visits')
  //   // .then(res => res.json())
  //   // .then(data => {
  //   //   setVisits(data)
  //   // })
  // }, [])


  const addSecretSpot = (newSecretSpot) => {
    // console.log(newSecretSpot)
    setSecretSpots([...secretSpots, newSecretSpot])
  }



  
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
          <h1>Secret NYC</h1>
          <p>Discover secret spots in NYC like a true New Yorker!</p>
          <Navbar />
          <Routes>
            <Route exact path="/visits/new" element={ <VisitAddForm /> }/>
            <Route exact path="/visits/:id/edit" element={ <VisitEditForm /> }/>
            <Route path="/secret_spots/:id" element={ <SecretSpotDetails /> }/>
            <Route exact path="/my_secret_spots" element={ <UserSecretSpots secretSpots={secretSpots} addSecretSpot={addSecretSpot} /> }/>
            <Route exact path="/signup" element={ <SignUp /> } />
            <Route exact path="/login" element={ <LogIn /> } />
            <Route exact path="/home" element={ <Home secretSpots={secretSpots} /> } />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;

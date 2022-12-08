import React, { useState, useContext } from 'react';
// import { Route, useParams } from 'react-router-dom';
import { UserContext  } from '../context/user';
import Visit from './Visit';

const SecretSpotsContainer = () => {

  const { userSecretSpots, visits, loggedIn } = useContext(UserContext);
  
  // console.log(visits)
  const allVisits = visits.map(visit => {
    return (
      <>
        <Visit key={visit.id} visit={visit} spot={visit.secret_spot} date={visit.date} note={visit.note} />
      </>
    )
  })
  
  const allSecretSpots = userSecretSpots.map(secretSpot => <li key={secretSpot.id}>{secretSpot.name}</li>)
  // const allSecretSpots = secretSpots.map(secretSpot => <SecretSpot secretSpot={secretSpot} key={secretSpot.id}/>)

  if (loggedIn) {
    return (
      <div>
        <h3>Here are your Secret Spots</h3>
        {allSecretSpots}
        <h3>Here are your Visits</h3>
        {allVisits}
      </div>
    )
  } else {
    return (<h4>Please login or create an Account</h4>)
  }
}

export default SecretSpotsContainer
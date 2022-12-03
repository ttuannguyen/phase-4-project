import React, { useState, useContext } from 'react';
// import { Route, useParams } from 'react-router-dom';
import SecretSpot from './SecretSpot';
import SecretSpotAddForm from './SecretSpotAddForm';
import VisitAddForm from './VisitAddForm';
import { UserContext  } from '../context/user';

const SecretSpotsContainer = () => {

  const { secretSpots, visits, loggedIn } = useContext(UserContext);
  const [formToggle, setFormToggle] = useState(false); // to expose the form
  
  console.log(visits)
  const allVisits = visits.map(visit => <li key={visit.id}>Secret spot: {visit.secret_spot} | On: {visit.date} | Comment: {visit.comment}</li>)
  
  const allSecretSpots = secretSpots.map(secretSpot => <li key={secretSpot.id}>{secretSpot.name}</li>)
  // const allSecretSpots = secretSpots.map(secretSpot => <SecretSpot secretSpot={secretSpot} key={secretSpot.id}/>)
  
  // hide the form away after adding a spot
  const afterAddSpot = () => {
    setFormToggle(false)
  }

  if (loggedIn) {
    return (
      <div>
        <h3>Here are your Secret Spots</h3>
        {allSecretSpots}
        <h3>Here are your Visits</h3>
        {allVisits}
        <br/>
        {formToggle ? <SecretSpotAddForm afterAddSpot={afterAddSpot}/> : <button onClick={() => setFormToggle(true)}>Add a Spot!</button>}
        <VisitAddForm />
      </div>
    )
  } else {
    return (<h4>Please login or create an Account</h4>)
  }
}

export default SecretSpotsContainer
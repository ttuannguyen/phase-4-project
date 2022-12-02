import React, { useState, useContext } from 'react';
// import { Route, useParams } from 'react-router-dom';
import SecretSpot from './SecretSpot';
import SecretSpotAddForm from './SecretSpotAddForm';
import { UserContext  } from '../context/user';

const SecretSpotsContainer = () => {

  const { secretSpots, loggedIn } = useContext(UserContext);
  const [formToggle, setFormToggle] = useState(false); // to expose the form
  
  // console.log(secretSpots)
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
        <br/>
        {formToggle ? <SecretSpotAddForm afterAddSpot={afterAddSpot}/> : <button onClick={() => setFormToggle(true)}>Add a Spot!</button>}
      </div>
    )
  } else {
    return (<h4>Please login or create an Account</h4>)
  }
}

export default SecretSpotsContainer
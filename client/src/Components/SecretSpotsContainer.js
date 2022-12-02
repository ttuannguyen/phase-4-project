import React, { useState, useContext } from 'react';
// import { Route, useParams } from 'react-router-dom';
import SecretSpot from './SecretSpot';
import SecretSpotAddForm from './SecretSpotAddForm';
import { UserContext  } from '../context/user';

const SecretSpotsContainer = ({ secretSpots }) => {

  const {} = useContext(UserContext);
  const {formFlag, setFormFlag} = useState(false); 
  
  // console.log(secretSpots)
  // const allSecretSpots = secretSpots.map(secretSpot => <h4>{secretSpot.location}</h4>)
  const allSecretSpots = secretSpots.map(secretSpot => <SecretSpot secretSpot={secretSpot} key={secretSpot.id}/>)

  return (
    <div>
      <h3>Secret Spots</h3>
      {allSecretSpots}
      <SecretSpotAddForm />
    </div>
  )
}

export default SecretSpotsContainer
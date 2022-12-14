import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import SecretSpotAddForm from './SecretSpotAddForm';
import SecretSpotLink from './SecretSpotLink';

const Home = () => {
  const { user, loggedIn, secretSpots } = useContext(UserContext);
  const [formToggle, setFormToggle] = useState(false); 
  
  const afterAddSpot = () => setFormToggle(false) 

  if (loggedIn) {
    const allSecretSpotsList = secretSpots.map(secretSpot => {
      return (
          <SecretSpotLink key={secretSpot.id} secretSpot={secretSpot} />
      )
    })


    return (
      <div className='home-div'>
        <h3>Welcome, {user.username}!</h3>
        <p>Please see the following listings for various secret spots in the Big Apple for you to explore.</p>
        {allSecretSpotsList}
        <p>Share a new secret spot with the community!</p>
        {formToggle ? <SecretSpotAddForm afterAddSpot={afterAddSpot}/> : <button onClick={() => setFormToggle(true)}>Add a Spot!</button>}
      </div>
    )
  } else {
      return (<h4>Please login or create an Account</h4>)
  } 
  
}

export default Home
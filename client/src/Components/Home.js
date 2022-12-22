import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/user';
import SecretSpot from './SecretSpot';
import SecretSpotAddForm from './SecretSpotAddForm';
import SecretSpotLink from './SecretSpotLink';

const Home = () => {
  const { user, loggedIn, secretSpots, fetchSecretSpots } = useContext(UserContext);
  const [formToggle, setFormToggle] = useState(false); // to expose the secret spot add form
  console.log(secretSpots)


  useEffect(() => {
    fetchSecretSpots()
  }, [])
  // const [secretSpots, setSecretSpots] = useState([]);
  
  const afterAddSpot = () => setFormToggle(false)


  // useEffect(() => {
  //   fetch('/secret_spots')
  //   .then(res => res.json())
  //   .then(json => setSecretSpots(json))
  // }, [])
  
//   const addSecretSpot = (newSecretSpot) => {
//     // console.log(newSecretSpot)
//     setSecretSpots([...secretSpots, newSecretSpot])
// }
  
  // hide the form away after adding a spot


  const allSecretSpotsList = secretSpots.map(secretSpot => {
    return (
        <SecretSpotLink key={secretSpot.id} secretSpot={secretSpot} />
    )
  })

  if (loggedIn) {
    return (
      <div className='home-div'>
        <h3>Welcome, {user.username}!</h3>
        <p>Please see Listings for the various secret spots in the Big Apple for you to explore</p>
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
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/user';
import SecretSpotAddForm from './SecretSpotAddForm';
import VisitAddButton from './VisitAddButton';
import VisitAddForm from './VisitAddForm';

const Home = () => {
  const { user, loggedIn, allSecretSpots } = useContext(UserContext);
  const [formToggle, setFormToggle] = useState(false); // to expose the secret spot add form
  const [visitFormToggle, setVisitFormToggle] = useState(false); // to expose the visit add form

  // hide the form away after adding a spot
  const afterAddSpot = () => setFormToggle(false)

  // console.log(allSecretSpots)

  // TODO: fix the button on each spot to toggle only the form of the spot in question
  const allSecretSpotsList = allSecretSpots.map(spot => {

  
    return (
        <div key={spot.id}>
          <h4>{spot.name}</h4>
          {/* TODO: Design the button to toggle the visit add form (i.e. expose the form upon click and hide it after submitting) */}
          {/* {visitFormToggle ? <VisitAddForm spot={spot} /> : <button onClick={() => setVisitFormToggle(true)}>Add a Visit!</button>}  */}
          {/* <VisitAddForm spot={spot}/> */}
        </div>
    )
  })

  if (loggedIn) {
    return (
      <div>
        <h2>Welcome to your Secret NYC, {user.name}</h2>
        <h3>Here is the list of all the Secret Spots in NYC</h3>
        {allSecretSpotsList}
        <p>Don't see one? Add a new spot!</p>
        {formToggle ? <SecretSpotAddForm afterAddSpot={afterAddSpot}/> : <button onClick={() => setFormToggle(true)}>Add a Spot!</button>}
      </div>
    )
  } else {
    return (<h4>Please login or create an Account</h4>)
  } 
  
  // if (!user || user.error ) {
  //   return (<p>Please Login or Create an Account</p>)
  // } else {
  //   return (
  //     // This section is no longer needed as we have the "if (user)" logic in Navbar
  //     <div>
  //       <h4>This is {user.name}'s Home Page</h4>
  //     </div>
  //   ) 
  // }
}

export default Home
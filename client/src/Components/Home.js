import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import SecretSpot from './SecretSpot';
import SecretSpotAddForm from './SecretSpotAddForm';

const Home = () => {
  const { user, loggedIn, secretSpots } = useContext(UserContext);
  const [formToggle, setFormToggle] = useState(false); // to expose the secret spot add form

  // hide the form away after adding a spot
  const afterAddSpot = () => setFormToggle(false)

  // console.log(allSecretSpots)


  const allSecretSpotsList = secretSpots.map(secretSpot => {
    return (
        <SecretSpot key={secretSpot.id} secretSpot={secretSpot} />
        // <div key={spot.id}>
        //   <h4>{spot.name}</h4> */}
        //   {/* <VisitAddForm spot={spot}/> */}
        //   {/* <Link>{spot.name}</Link> */}
        //   {/* {visitFormToggle ? <VisitAddForm spot={spot} /> : <button onClick={() => setVisitFormToggle(true)}>Add a Visit!</button>} 
        // </div>
    )
  })

  if (loggedIn) {
    return (
      <div className='home-div'>
        <h3>Welcome, {user.username}!</h3>
        <p>Here are the secret spots in the Big Apple for you to explore</p>
        {allSecretSpotsList}
        <p>Share a new secret spot with the community!</p>
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
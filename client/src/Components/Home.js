import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/user';
import SecretSpotAddForm from './SecretSpotAddForm';
import VisitAddForm from './VisitAddForm';

const Home = () => {
  const { user, loggedIn, allSecretSpots } = useContext(UserContext);
  const [formToggle, setFormToggle] = useState(false); // to expose the secret spot add form
  const [visitFormToggle, setVisitFormToggle] = useState(false); // to expose the visit add form

  // hide the form away after adding a spot
  const afterAddSpot = () => setFormToggle(false)

  // console.log(allSecretSpots)
  const allSecretSpotsList = allSecretSpots.map(s => {
    return (
        <div key={s.id}>
          <p>{s.name}</p>
          <Link to={"/visits/new"}>
            <button>Visit</button>
          </Link>
        </div>
    )
  })

  if (loggedIn) {
    return (
      <div>
        <h4>Welcome to your Secret NYC, {user.name}</h4>
        <h4>Here is the list of all the Secret Spots in NYC</h4>
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
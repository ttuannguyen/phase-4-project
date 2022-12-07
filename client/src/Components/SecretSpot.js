import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/user';



const SecretSpot = () => {
  const { user, loggedIn, allSecretSpots } = useContext(UserContext);
  console.log(allSecretSpots[0]);
  const { id } = useParams();
  // TODO: build out the show page for the individual page


  return (
    <p>This is Individual Secret Spot's Show Page</p>
  )
}

export default SecretSpot
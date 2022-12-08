import React, { useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../context/user';

const SecretSpot = ({secretSpot}) => {
  const { user, loggedIn, allSecretSpots } = useContext(UserContext);
  // TODO: build out the show page for the individual page
  // console.log(secretSpot)

  return (
    <>
      <Link to={`/secret_spots/${secretSpot.id}`}>
        <p>{secretSpot.name}</p>
      </Link>
    </>
  )
}

export default SecretSpot
import React from 'react';
import { Link } from 'react-router-dom';

const SecretSpot = ({secretSpot}) => {
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
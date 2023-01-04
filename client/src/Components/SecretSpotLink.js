import React from 'react';
import { Link } from 'react-router-dom';

const SecretSpotLink = ({secretSpot}) => {

return (
    <>
      <Link className='spot-link' to={`/secret_spots/${secretSpot.id}`}>
        <h4>{secretSpot.name}</h4>
      </Link>
    </>
  )
}

export default SecretSpotLink
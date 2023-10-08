import React from 'react'

const SecretSpotCard = ({secretSpot}) => {
  return (
    <div>
        <h3>{secretSpot.name}</h3>
        <p>Description: {secretSpot.description}</p>
        <p>Location: {secretSpot.location}</p>
        <p>Cost: {secretSpot.cost}</p>
    </div>
  )
}

export default SecretSpotCard
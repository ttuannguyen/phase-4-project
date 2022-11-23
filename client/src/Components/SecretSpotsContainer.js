import React from 'react'
import SecretSpot from './SecretSpot'

const SecretSpotsContainer = ({ secretSpots }) => {

  // console.log(secretSpots)
  // const allSecretSpots = secretSpots.map(secretSpot => <h4>{secretSpot.location}</h4>)
  const allSecretSpots = secretSpots.map(secretSpot => <SecretSpot secretSpot={secretSpot} key={secretSpot.key}/>)

  return (
    <div>
      SecretSpotsContainer
      {allSecretSpots}
    </div>
  )
}

export default SecretSpotsContainer
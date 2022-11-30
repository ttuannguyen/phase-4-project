import React from 'react'
import SecretSpot from './SecretSpot'
import SecretSpotAddForm from './SecretSpotAddForm'

const SecretSpotsContainer = ({ secretSpots }) => {

  // console.log(secretSpots)
  // const allSecretSpots = secretSpots.map(secretSpot => <h4>{secretSpot.location}</h4>)
  const allSecretSpots = secretSpots.map(secretSpot => <SecretSpot secretSpot={secretSpot} key={secretSpot.id}/>)

  return (
    <div>
      <h3>Secret Spots</h3>
      {allSecretSpots}
      <SecretSpotAddForm />
    </div>
  )
}

export default SecretSpotsContainer
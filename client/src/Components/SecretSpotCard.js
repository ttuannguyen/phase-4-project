import React from 'react'
import { Card } from 'react-bootstrap';


const SecretSpotCard = ({secretSpot}) => {

  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`/secret_spots/${secretSpot.id}`}>
          <Card.Img src={secretSpot.image_url} alt={secretSpot.name} />
        </a>
        <Card.Body>
          <a href={`/secret_spots/${secretSpot.id}`}>
            <Card.Title as="div">
              <strong>{secretSpot.name}</strong>
            </Card.Title>
          </a>
        </Card.Body>
    </Card>
  )
}

export default SecretSpotCard
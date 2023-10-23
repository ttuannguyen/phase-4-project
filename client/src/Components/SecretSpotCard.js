import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SecretSpotCard = ({secretSpot}) => {

  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/secret_spots/${secretSpot.id}`}>
          <Card.Img src={secretSpot.image_url} alt={secretSpot.name} />
        </Link>
        <Card.Body>
          <Link style={{ textDecoration: 'none' }} to={`/secret_spots/${secretSpot.id}`}>
            <Card.Title as="div">
              <strong>{secretSpot.name}</strong>
            </Card.Title>
          </Link>
        </Card.Body>
    </Card>
  )
}

export default SecretSpotCard
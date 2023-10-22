import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import SecretSpotAddForm from './SecretSpotAddForm';
import SecretSpotLink from './SecretSpotLink';
import SecretSpotCard from './SecretSpotCard';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const { user, loggedIn, secretSpots } = useContext(UserContext);
  const [formToggle, setFormToggle] = useState(false); 
  
  const afterAddSpot = () => setFormToggle(false) 

  if (loggedIn) {
    const allSecretSpotsList = secretSpots.map(secretSpot => {
      return (
            <Col sm={12} md={6} lg={4} xl={3}>
              <SecretSpotCard key={secretSpot.id} secretSpot={secretSpot} />
            </Col>
      )
    })

    // const allSecretSpotsList = secretSpots.map(secretSpot => {
    //   return (
    //       <SecretSpotLink key={secretSpot.id} secretSpot={secretSpot} />
    //   )
    // })


    return (
      <div className='home-div'>
        <h3>Welcome, {user.username}!</h3>
        <p>Please see the following listings for various secret spots in the Big Apple for you to explore.</p>
        <Container>
          <Row>
            {allSecretSpotsList}
          </Row>
        </Container>
        <p>Share a new secret spot with the community!</p>
        {formToggle ? <SecretSpotAddForm afterAddSpot={afterAddSpot}/> : <button onClick={() => setFormToggle(true)}>Add a Spot!</button>}
      </div>
    )
  } else {
      return (<h4>Please login or create an Account</h4>)
  } 
  
}

export default Home
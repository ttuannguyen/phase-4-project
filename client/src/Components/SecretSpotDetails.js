import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import { useParams, Link } from 'react-router-dom';
import VisitAddForm from './VisitAddForm';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';

const SecretSpotDetails = () => {
    
    const params = useParams();
    const { loggedIn, secretSpots } = useContext(UserContext);
    const [visitFormToggle, setVisitFormToggle] = useState(false);
    const [secretSpot, setSecretSpot] = useState({}); 

    
    if (!secretSpot.id && secretSpots.length !==0 ) {
        const s = secretSpots.find(s => s.id === parseInt(params.id)); 
        setSecretSpot(s)
    }

    const afterAddVisit = () => setVisitFormToggle(false)

    if (loggedIn) {
        return (
            <div className='secret-spot-details-div'>
                <Link to='/home' className='btn btn-light my-3'>Go Back</Link>
                <Row>
                    <Col md={6}>
                        <Image src={secretSpot.image_url} alt={secretSpot.name} fluid/>
                    </Col>

                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item><h3>{secretSpot.name}</h3></ListGroup.Item>
                            <ListGroup.Item>Description: {secretSpot.description}</ListGroup.Item>
                            <ListGroup.Item>Location: {secretSpot.location}</ListGroup.Item>
                            <ListGroup.Item>Cost: {secretSpot.cost}</ListGroup.Item>
                            <ListGroup.Item>
                                {visitFormToggle ? 
                                    <VisitAddForm secretSpot={secretSpot} afterAddVisit={afterAddVisit} /> 
                                    : 
                                    <Button variant='light' className='my-3' onClick={() => setVisitFormToggle(true)}>Add a Visit</Button>
                                }
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            
            
            </div>
        )
    } else {
        return (<h4>Please login or create an Account</h4>)
    }
}

export default SecretSpotDetails
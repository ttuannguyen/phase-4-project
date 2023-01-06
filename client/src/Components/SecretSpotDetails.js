import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import { useParams } from 'react-router-dom';
import VisitAddForm from './VisitAddForm';

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
                <h3>{secretSpot.name}</h3>
                <p>Description: {secretSpot.description}</p>
                <p>Location: {secretSpot.location}</p>
                <p>Cost: {secretSpot.cost}</p>
                {visitFormToggle ? <VisitAddForm secretSpot={secretSpot} afterAddVisit={afterAddVisit} /> : <button class='visit-add-btn' onClick={() => setVisitFormToggle(true)}>Add a Visit!</button>}
            </div>
        )
    } else {
        return (<h4>Please login or create an Account</h4>)
    }
}

export default SecretSpotDetails
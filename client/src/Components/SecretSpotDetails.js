import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import { useParams } from 'react-router-dom';
import VisitAddForm from './VisitAddForm';

const SecretSpotDetails = () => {
    
    const params = useParams();
    const { secretSpots, fetchSecretSpots } = useContext(UserContext);
    const [visitFormToggle, setVisitFormToggle] = useState(false); // to expose the visit add form
    
    // Conditional to allow the fetch to be done
    fetchSecretSpots()
    let secretSpot = {}
    if (secretSpot.length == 0) {
        secretSpot = {id: params.id, name: "", location: "", description: "", cost: ""}    
    } else {
        secretSpot = secretSpots.find(s => s.id == params.id); 
    }

    const afterAddVisit = () => setVisitFormToggle(false)
    // allSecretSpots.find(s => s.id == params.id);
    // console.log(params.id)
    // console.log(allSecretSpots)
    // console.log(secretSpot.id)

    return (
        <div className='secret-spot-details-div'>
            <h3>{secretSpot.name}</h3>
            <p>Description: {secretSpot.description}</p>
            <p>Location: {secretSpot.location}</p>
            <p>Cost: {secretSpot.cost}</p>
            {visitFormToggle ? <VisitAddForm secretSpot={secretSpot} afterAddVisit={afterAddVisit} /> : <button class='visit-add-btn' onClick={() => setVisitFormToggle(true)}>Add a Visit!</button>}
        </div>
    )
}

export default SecretSpotDetails
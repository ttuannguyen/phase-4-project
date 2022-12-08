import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import { useParams, useNavigate } from 'react-router-dom';
import VisitAddForm from './VisitAddForm';

const SecretSpotDetails = () => {
    
    const params = useParams();
    const { allSecretSpots } = useContext(UserContext);
    const [visitFormToggle, setVisitFormToggle] = useState(false); // to expose the visit add form
    
    // Conditional to allow the fetch to be done
    let secretSpot = {}
    if (allSecretSpots.length == 0) {
        secretSpot = {id: params.id, name: "", location: "", description: "", cost: ""}    
    } else {
        secretSpot = allSecretSpots.find(s => s.id == params.id); 
    }
    // allSecretSpots.find(s => s.id == params.id);
    // console.log(params.id)
    // console.log(allSecretSpots)
    // console.log(secretSpot.id)

    return (
        <div>
            {/* Isssue: these cannot be read after refreshing the page */}
            <h3>{secretSpot.name}</h3>
            <p>Description: {secretSpot.description}</p>
            <p>Location: {secretSpot.location}</p>
            <p>Cost: {secretSpot.cost}</p>
            {/* {visitFormToggle ? <VisitAddForm spotId={secretSpot.id} /> : <button onClick={() => setVisitFormToggle(true)}>Add a Visit!</button>} */}
        </div>
    )
}

export default SecretSpotDetails
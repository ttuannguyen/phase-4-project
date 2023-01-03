import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/user';
import { useParams } from 'react-router-dom';
import VisitAddForm from './VisitAddForm';

const SecretSpotDetails = () => {
    
    const params = useParams();
    const { user, loggedIn, secretSpots, fetchSecretSpots } = useContext(UserContext);
    const [visitFormToggle, setVisitFormToggle] = useState(false); // to expose the visit add form
    const [secretSpot, setSecretSpot] = useState([]); // for backup method

    
    // METHOD 1: via data from context
    // ISSUE: breaks when after refreshing the page
    // Conditional to allow the fetch to be done
    // let secretSpot = {}
    // if (secretSpot.length == 0) {
    //     secretSpot = {}    
    //     // secretSpot = {id: params.id, name: "", location: "", description: "", cost: ""}    
    // } else {
    //     secretSpot = secretSpots.find(s => s.id == params.id); 
    // }
    // console.log(secretSpot)

    // METHOD 2 - BACKUP: fetch to /secret_spots/:id
    useEffect(() => {
        fetch(`/secret_spots/${params.id}`)
        .then(res => res.json())
        .then(json => setSecretSpot(json))
    }, [])

    // ATTEMPT
    // useEffect(() => {
    //     if (!secretSpots) {
    //         setSecretSpotsToRender([]) 
    //     } else {
    //         setSecretSpotsToRender([secretSpots]) 
    //     }
    // }, [secretSpots])


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
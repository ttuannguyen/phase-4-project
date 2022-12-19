import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import { useParams, useNavigate } from 'react-router-dom';

const VisitEditForm = () => {

    const { user, secretSpots, updateVisit, fetchSecretSpots } = useContext(UserContext);
    const params = useParams(); // accessing the id in the route/path 
    const [note, setNote] = useState('');
    const navigate = useNavigate('');

    // console.log(params.id)

    const visitFound = user.visits.find(v => v.id == params.id); // updated from ===
    // console.log(visitFound)  
    const secretSpot = secretSpots.find(s => s.id == visitFound.secret_spot_id); // updated from ===
    // console.log(secretSpot)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/users/${user.id}/visits/${params.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                note: note
            })
        })
        .then(res => res.json())
        .then(data => {
            updateVisit(data)
            fetchSecretSpots()
            // renderNewlyOwnedSpot()
            navigate('/secret_spots')
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            Secret Spot: {secretSpot.name}<br/>
            {/* <p>Date: {secretSpot.date}</p> */}
            <label>Note</label><br/>
            <textarea type="text" name='note' value={note} onChange={e => setNote(e.target.value)} /><br/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default VisitEditForm
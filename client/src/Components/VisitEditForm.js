import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/user';
import { useParams, useNavigate } from 'react-router-dom';

const VisitEditForm = () => {

    const { user, secretSpots, updateVisit, fetchSecretSpots, visits, setVisits } = useContext(UserContext);
    const params = useParams(); // accessing the id in the route/path 
    const [note, setNote] = useState('');
    const navigate = useNavigate('');
    const [visitFound, setVisitFound] = useState({});


    // console.log(params.id)
    console.log(visits)
    if (!visitFound.id) {
        const vf = user.visits.find(v => v.id == params.id); // updated from ===
        setVisitFound(vf)
    }
    console.log(visitFound)

    console.log(secretSpots)
    let ss = secretSpots.find(s => s.id == visitFound.secret_spot_id)
    console.log(ss)

    // const visitFound = user.visits.find(v => v.id == params.id); // updated from ===
    // // debugger
    // console.log(visitFound)  
    // const secretSpot = secretSpots.find(s => s.id == visitFound.secret_spot_id); // updated from ===
    
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
            navigate('/my_secret_spots')
        })
    }

    return (
        <div class='visit-edit-div'>
            <form onSubmit={handleSubmit}>
                {/* Secret Spot: {ss.name} */}
                {/* <p>Date: {secretSpot.date}</p> */}
                {visitFound.date}
                <br/>
                <label>Note:</label><br/>
                <textarea type="text" name='note' value={note} onChange={e => setNote(e.target.value)} /><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default VisitEditForm
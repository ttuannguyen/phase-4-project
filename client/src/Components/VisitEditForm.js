import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/user';
import { useParams, useNavigate } from 'react-router-dom';

const VisitEditForm = () => {

    const { user, userSecretSpots, updateVisit, fetchSecretSpots, visits, setVisits } = useContext(UserContext);
    const params = useParams(); // accessing the id in the route/path 
    const [note, setNote] = useState('');
    const navigate = useNavigate('');
    const [visitFound, setVisitFound] = useState({});
    const [visit, setVisit] = useState({});
    
    


    // METHOD 1: Based on global data in user context
    // ISSUE: This breaks after refreshing
    if (!visitFound.id) {
        const vf = user.visits.find(v => v.id == params.id); // updated from ===
        setVisitFound(vf)
    }
    // let ss = userSecretSpots.find(s => s.id == visitFound.secret_spot_id)


    // BACKUP METHOD: fetch to /visits
    // useEffect(() => {
    //     fetch(`/visits/${params.id}`)
    //     .then(res => res.json())
    //     .then(json => setVisit(json))
    // }, [])

    // console.log(visits)
    // console.log(userSecretSpots)


    
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
            // fetchSecretSpots()
            // renderNewlyOwnedSpot()
            navigate('/my_secret_spots')
        })
    }

    return (
        <div class='visit-edit-div'>
            <form onSubmit={handleSubmit}>
                {/* with method 1 */}
                <h4>{visitFound.secret_spot}</h4>
                <p>Date: {visitFound.date}</p>
                {/* with backup */}
                {/* <h4>{visit.secret_spot}</h4>
                <p>Date: {visit.date}</p> */}
                <br/>
                <label>Note:</label><br/>
                <textarea type="text" name='note' value={note} onChange={e => setNote(e.target.value)} /><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default VisitEditForm
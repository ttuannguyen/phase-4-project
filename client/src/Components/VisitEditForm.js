import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import { useParams, useNavigate } from 'react-router-dom';

const VisitEditForm = () => {

    const { visits, updateVisit } = useContext(UserContext);
    const params = useParams(); // accessing the id in the route/path 
    const [note, setNote] = useState('');
    const navigate = useNavigate('');


    // console.log(visits)
    // console.log(params.id)
    
    // const isVisit = (visit) => {
    //     return visit.id == params.id
    // }
    // const result = visits.find(isVisit)
    // console.log(result)

    const secretSpot = visits.find(v => v.id == params.id); // updated from ===
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/visits/${params.id}`, {
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
            navigate('/secret_spots')
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            Secret Spot: {secretSpot.secret_spot}<br/>
            <p>Date: {secretSpot.date}</p>
            <label>Note</label><br/>
            <textarea type="text" name='note' value={note} onChange={e => setNote(e.target.value)} required /><br/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default VisitEditForm
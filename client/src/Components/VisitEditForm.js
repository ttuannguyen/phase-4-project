import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/user';
import { useParams, useNavigate } from 'react-router-dom';

const VisitEditForm = () => {

    const { updateVisit } = useContext(UserContext);
    const { id } = useParams(); // accessing the id in the route/path 
    const [note, setNote] = useState('');
    const navigate = useNavigate('');

    // console.log(visits)
    // const obj = {note: note}
    // console.log(obj)
    // console.log(note)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/visits/${id}`, {
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
            <label>Note</label><br/>
            <textarea type="text" name='note' value={note} onChange={e => setNote(e.target.value)} required /><br/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default VisitEditForm
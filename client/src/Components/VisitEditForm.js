import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/user';
import { useParams, useNavigate } from 'react-router-dom';

const VisitEditForm = () => {

    const { user, updateVisit, loggedIn } = useContext(UserContext);
    const params = useParams(); 
    const [note, setNote] = useState('');
    const navigate = useNavigate('');
    const [visitFound, setVisitFound] = useState({});

    if (!visitFound.id && user.id) {
        const vf = user.visits.find(v => v.id == params.id); 
        setVisitFound(vf)
    }

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
            navigate('/my_secret_spots')
        })
    }

    if (loggedIn) {
        return (
            <div class='visit-edit-div'>
                <form onSubmit={handleSubmit}>
                    <h4>{visitFound.secret_spot}</h4>
                    <p>Date: {visitFound.date}</p>
                    <br/>
                    <label>Note:</label><br/>
                    <textarea type="text" name='note' value={note} onChange={e => setNote(e.target.value)} /><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    } else {
        return (<h4>Please login or create an Account</h4>)
    }
}

export default VisitEditForm



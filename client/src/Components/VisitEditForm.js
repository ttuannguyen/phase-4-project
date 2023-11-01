import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const VisitEditForm = () => {

    const { user, updateVisit, loggedIn, toggle, setToggle } = useContext(UserContext);
    const params = useParams(); 
    // const [note, setNote] = useState('');

    const [visitFound, setVisitFound] = useState({});

    if (!visitFound.id && user.id) {
        const vf = user.visits.find(v => v.id === parseInt(params.id)); 
        setVisitFound(vf)
    }

    const [formData, setFormData] = useState({
        date: visitFound.date,
        note: visitFound.note   
      });

    const handleChange = (e) => {
        setFormData(formData => {
            return {...formData, [e.target.name]:e.target.value}
        })
    };  


    const navigate = useNavigate('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            date:'',
            note:''
        })

        fetch(`/users/${user.id}/visits/${params.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            updateVisit(data)
            navigate('/my_secret_spots')
            setToggle(!toggle)
        })
    }

    if (loggedIn) {
        return (

            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control type='text' name='date' value={formData.date} onChange={handleChange} defaultValue={visitFound.date} />
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Note</Form.Label>
              <Form.Control type="text" name='note' value={formData.note} onChange={handleChange} defaultValue={visitFound.note} />
            </Form.Group>
  
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

            // <div className='visit-edit-div'>
            //     <form onSubmit={handleSubmit}>
            //         <h4>{visitFound.secret_spot}</h4>
            //         <label>Note:</label><br/>
            //         <textarea placeholder={visitFound.note} type="text" name='note' value={note} onChange={e => setNote(e.target.value)} /><br/>
            //         <label>Note:</label><br/>
            //         <textarea placeholder={visitFound.note} type="text" name='note' value={note} onChange={e => setNote(e.target.value)} /><br/>
            //         <button type="submit">Submit</button>
            //     </form>
            // </div>
        )
    } else {
        return (<h4>Please login or create an Account</h4>)
    }
}

export default VisitEditForm



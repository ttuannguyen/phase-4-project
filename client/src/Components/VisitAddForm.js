import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import { Button, Form } from 'react-bootstrap';


const VisitAddForm = ({secretSpot, afterAddVisit}) => {

  const { user, addVisit, toggle, setToggle } = useContext(UserContext);
  const [errorsList, setErrorsList] = useState([]);
    
  const [formData, setFormData] = useState({
    secret_spot_id: secretSpot.id,
    date:'',
    note:'',   
  });

  const handleChange = (e) => {
    setFormData(formData => {
        return {...formData, [e.target.name]:e.target.value}
    })
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({
      date:'',
      note:''
    })

    fetch(`/users/${user.id}/visits`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(json => {
        if (json.errors) {
            const errorItems = json.errors.map(e => <li key={e.id}>{e}</li>)
            setErrorsList(errorItems)
        } else {
            addVisit(json)
            afterAddVisit()
            setToggle(!toggle)
        }
    })
  }
  
  return (
    <>
        <h4>Add a Visit</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date</Form.Label>
            <Form.Control type='text' name='date' value={formData.date} onChange={handleChange} placeholder="Enter a date of visit" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Note</Form.Label>
            <Form.Control type="text" name='note' value={formData.note} onChange={handleChange} placeholder="Enter a note" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      
      {errorsList}
    </>
  )
}

export default VisitAddForm
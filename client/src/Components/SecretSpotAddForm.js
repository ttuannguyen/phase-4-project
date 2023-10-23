import React, { useContext, useState } from 'react';
import { UserContext } from '../context/user';
import { Button, Form } from 'react-bootstrap';

const SecretSpotAddForm = ({afterAddSpot}) => {

    const { addSecretSpot } = useContext(UserContext);
    const [errorsList, setErrorsList] = useState([]);

    const [formData, setFormData] = useState({
        name:'',
        location:'',   
        description:'',
        cost:''   
    });

    const handleChange = (e) => {
        setFormData(formData => {
            return {...formData, [e.target.name]:e.target.value}
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        setFormData({
            name:'',
            location:'',   
            description:'',
            cost:'' 
        })

        fetch('/secret_spots',{
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
                addSecretSpot(json)
                afterAddSpot() 
            }
        })
    }

  
    return (
    <>
        <h4>Add a Secret Spot</h4>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name='name' value={formData.name} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" name='location' value={formData.location} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name='description' value={formData.description} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Cost</Form.Label>
            <Form.Control type="text" name='cost' value={formData.cost} onChange={handleChange} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        
        {errorsList}
  </>
  )
}

export default SecretSpotAddForm
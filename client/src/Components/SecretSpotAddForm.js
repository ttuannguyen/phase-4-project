import React, { useContext, useState } from 'react';
import { UserContext } from '../context/user';

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
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name='name' value={formData.name} onChange={handleChange} /><br/>
            <label>Location</label>
            <input type="text" name='location' value={formData.location} onChange={handleChange} /><br/>
            <label>Description</label>
            <textarea type="text" name='description' value={formData.description} onChange={handleChange} /><br/>
            <label>Cost</label>
            <input type="text" name='cost' value={formData.cost} onChange={handleChange} /><br/>
            <button type="submit">Add!</button>
        </form>
        {errorsList}
  </>
  )
}

export default SecretSpotAddForm
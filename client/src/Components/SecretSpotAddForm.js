import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user';

const SecretSpotAddForm = ({afterAddSpot}) => {

    const { addSecretSpot } = useContext(UserContext)
    // // other way: add a state var for each input
    // const [name, setName] = useState('');
    // const [location, setLocation] = useState('');
    // const [description, setDescription] = useState('');
    // const [cost, setCost] = useState('');
    // const navigate = useNavigate();


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
        // console.log(formData)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        addSecretSpot(formData)
        // reset form
        setFormData({
            name:'',
            location:'',   
            description:'',
            cost:'' 
        })
        afterAddSpot() // calling this function to hide the form
    }
    
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     // reset form
    //     setFormData({
    //         name:'',
    //         location:'',   
    //         description:'',
    //         cost:'' 
    //     })

    //     fetch('/secret_spots', {
    //         method: 'POST', 
    //         headers: {
    //         'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(formData)
    //     })
    //     .then(res => res.json())
    //     .then(newSecretSpot => {
    //         console.log(newSecretSpot)
    //         // addSecretSpot(newSecretSpot)
    //     })

    //     navigate('/secret_spots');
    // }
  
    return (
    <>
        <h4>Add a Secret Spot</h4>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name='name' value={formData.name} onChange={handleChange} required /><br/>
            <label>Location</label>
            <input type="text" name='location' value={formData.location} onChange={handleChange} required /><br/>
            <label>Description</label>
            <textarea type="text" name='description' value={formData.description} onChange={handleChange} required /><br/>
            <label>Cost</label>
            <input type="text" name='cost' value={formData.cost} onChange={handleChange} required/><br/>
            <button type="submit">Add!</button>
        </form>
  </>
  )
}

export default SecretSpotAddForm
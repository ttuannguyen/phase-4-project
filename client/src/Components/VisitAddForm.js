import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';

const VisitAddForm = ({secretSpot, afterAddVisit}) => {

  const { user, fetchSecretSpots } = useContext(UserContext);
  const [errorsList, setErrorsList] = useState([]);
  // console.log(secretSpot)
  // const navigate = useNavigate();

  console.log(user)
  
  // TODO: fix form data 
  const [formData, setFormData] = useState({
    secret_spot_id: secretSpot.id,
    date:'',
    note:'',   
  });
  // console.log(formData)

  const handleChange = (e) => {
    setFormData(formData => {
        return {...formData, [e.target.name]:e.target.value}
    })
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // reset form
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
        // console.log(json.errors)
        if (json.errors) {
            const errorItems = json.errors.map(e => <li key={e.id}>{e}</li>)
            setErrorsList(errorItems)
        } else {
            // addVisit(json)
            afterAddVisit() // calling this function to hide the form
            fetchSecretSpots()
        }
    })
  }

  
  return (
    <>
      <p>Add a Visit</p>
      <form onSubmit={handleSubmit}>
        <label>Date</label>
        <input type='text' name='date' value={formData.date} onChange={handleChange} /><br/>
        <label>Note</label>
        <textarea type="text" name='note' value={formData.note} onChange={handleChange} /><br/>
        <button type="submit">Submit</button>
      </form>
      {errorsList}
    </>
  )
}

export default VisitAddForm
import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import { useNavigate } from 'react-router-dom';

const VisitAddForm = ({ }) => {

  const { user, addVisit } = useContext(UserContext);
  // console.log(spot.id)
  // const navigate = useNavigate();
  
  // TODO: fix form data 
  const [formData, setFormData] = useState({
    secret_spot_id: 1,
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
    addVisit(formData)
    // reset form
    setFormData({
      date:'',
      note:''
    })

    // fetch('/visits', {
    //   method: 'POST', 
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData)
    // })
    // .then(res => res.json())
    // .then(newVisit => {
    //   console.log(newVisit)
    //   // addVisit(newVisit)
    // })
    // navigate('/visits');

  }

  
  return (
    <>
      <p>Add a Visit</p>
      <form onSubmit={handleSubmit}>
      <label>Date</label>
      <input type='text' name='date' value={formData.date} onChange={handleChange} required /><br/>
      <label>Note</label>
      <textarea type="text" name='note' value={formData.note} onChange={handleChange} required /><br/>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default VisitAddForm
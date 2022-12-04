import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VisitAddForm = () => {

  const [formData, setFormData] = useState({
    date:'',
    note:'',   
  });

  const navigate = useNavigate();

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


    fetch('/visits', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(newVisit => {
      console.log(newVisit)
      // addVisit(newVisit)
    })

    navigate('/visits');
  }

  
  return (
    <>
      <h4>Add a Visit</h4>
      <form onSubmit={handleSubmit}>
      <label>Date</label>
      <input type='text' name='date' value={formData.date} onChange={handleChange} required /><br/>
      <label>Note</label>
      <textarea type="text" name='note' value={formData.note} onChange={handleChange} required /><br/>
      <button type="submit">Visit!</button>
    </form>
    </>
  )
}

export default VisitAddForm
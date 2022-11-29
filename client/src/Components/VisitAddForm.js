import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VisitAddForm = () => {

  const [formData, setFormData] = useState({
    date:'',
    comment:'',   
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
      comment:''
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
      <h3>Add a Visit</h3>
      <form onSubmit={handleSubmit}>
      <label>Date</label>
      <input type='text' name='date' value={formData.date} onChange={handleChange} required /><br/>
      <label>Comment</label>
      <textarea type="text" name='comment' value={formData.comment} onChange={handleChange} required /><br/>
      <button type="submit">Visit!</button>
    </form>
    </>
  )
}

export default VisitAddForm
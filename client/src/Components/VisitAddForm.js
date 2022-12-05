import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import { useNavigate } from 'react-router-dom';

const VisitAddForm = () => {

  const { user, addVisit } = useContext(UserContext);
  // const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    // TODO: indiciate the id of the spot in question as the value of the secret_spot key below
    secret_spot:'',
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
      secret_spot:'',
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
      <h4>Add a Visit</h4>
      <form onSubmit={handleSubmit}>
      <label>Secret Spot</label>
      <input type='text' name='secret_spot' value={formData.secret_spot} onChange={handleChange} required /><br/>  
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
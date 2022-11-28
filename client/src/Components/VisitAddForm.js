import React from 'react'

const VisitAddForm = () => {
  return (
    <>
      <h3>Add a Visit</h3>
      <form>
      <label>Date</label>
      <input type="text" /><br/>
      <label>Comment</label>
      <textarea type="text" /><br/>
      <button type="submit">Visit!</button>
    </form>
    </>

  )
}

export default VisitAddForm
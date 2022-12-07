import React from 'react'

const Visit = ({spot, date, note}) => {
  return (
    <div>
        <p>Visit: {spot} | {date} | {note}</p>
        <button>Edit</button>
        <button>Delete</button>
    </div>
  )
}

export default Visit
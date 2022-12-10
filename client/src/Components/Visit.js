import React from 'react'
import { Link } from 'react-router-dom'
import VisitDeleteButton from './VisitDeleteButton'

const Visit = ({visit}) => {

    // console.log(visit)
    
    return (
        <div>
            <p>Visit: {visit.date} | Note: {visit.note}</p>
            <Link to={`/visits/${visit.id}/edit`}>
                <button>Edit</button>
            </Link>
            <VisitDeleteButton visit={visit}/>
        </div>
    )
}

export default Visit
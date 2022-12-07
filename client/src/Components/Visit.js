import React from 'react'
import VisitDeleteButton from './VisitDeleteButton'
import VisitEditButton from './VisitEditButton'

const Visit = ({visit}) => {
    
    return (
        <div>
            <p>Visit: {visit.secret_spot} | {visit.date} | {visit.note}</p>
            <VisitEditButton visit={visit}/>
            <VisitDeleteButton visit={visit}/>
        </div>
    )
}

export default Visit
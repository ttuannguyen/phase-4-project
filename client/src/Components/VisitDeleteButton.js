import React, { useContext, useState } from 'react';
import { UserContext } from '../context/user';

const VisitDeleteButton = ({visit}) => {

    const { user, deleteVisit, fetchSecretSpots } = useContext(UserContext);
    // console.log(visit.id)
    // console.log(visit)

    // TODO: Make associated spot disappear right away after the deleting the visit
    const handleClick = () => {
        fetch(`/users/${user.id}/visits/${visit.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            }
        })
        // deleteVisit(visit)
        fetchSecretSpots()
    }
    
    return (
        <button onClick={handleClick}>Delete</button>
    )
}

export default VisitDeleteButton
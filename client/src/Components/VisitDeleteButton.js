import React, { useContext, useState } from 'react';
import { UserContext } from '../context/user';

const VisitDeleteButton = ({visit}) => {

    const { user, fetchSecretSpots } = useContext(UserContext);

    const handleClick = () => {
        fetch(`/users/${user.id}/visits/${visit.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            }
        })
    }
    
    return (
        <button onClick={handleClick}>Delete</button>
    )
}

export default VisitDeleteButton
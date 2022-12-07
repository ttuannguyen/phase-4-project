import React, { useContext, useState } from 'react';
import { UserContext } from '../context/user';

const VisitDeleteButton = ({visit}) => {

    const { deleteVisit } = useContext(UserContext);
    // console.log(visit)

    const handleClick = () => {
        deleteVisit(visit)
    }
    return (
        <button onClick={handleClick}>Delete</button>
    )
}

export default VisitDeleteButton
import React, { useContext } from 'react';
import { UserContext } from '../context/user';

const VisitDeleteButton = ({visit}) => {

    const { user, toggle, setToggle } = useContext(UserContext);

    const handleClick = () => {
        fetch(`/users/${user.id}/visits/${visit.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            }
        })
        setToggle(!toggle)
    }
    
    return (
        <button onClick={handleClick}>Delete</button>
    )
}

export default VisitDeleteButton
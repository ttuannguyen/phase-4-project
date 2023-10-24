import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import { Button } from 'react-bootstrap';

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
        <Button variant='light' size='sm' onClick={handleClick}>
            Delete
        </Button>
    )
}

export default VisitDeleteButton
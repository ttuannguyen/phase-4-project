import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';

const VisitEditForm = () => {


    const handleChange = () => {
    }
    
    const handleSubmit = () => {
        console.log("submit")
    }

    return (
        <form onSubmit={handleSubmit}>
            Visit Edit Form 
            <label>Note</label>
            <textarea type="text" name='note' required /><br/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default VisitEditForm
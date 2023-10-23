import React, { useContext, useState } from 'react';
import { UserContext } from '../context/user';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const SignUp = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errorsList, setErrorsList] = useState([]);
    const { signup } = useContext(UserContext);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault()

        const userObj = {
            username,
            password,
            password_confirmation: passwordConfirmation
        }

        fetch('/signup',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(userObj)
        })
        .then(res => res.json())
        .then(user => {
            if(user.errors) {
                setUsername('')
                setPassword('')
                setPasswordConfirmation('')
                const errorItems = user.errors.map(e => <p key={e.id}>{e}</p>) 
                setErrorsList(errorItems) 
            } else {
                signup(user)
                navigate('/home')
            }
        })
    }

    return (
        <div id='signup'> 

            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Enter password confirmation" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            
        <ul>
            {errorsList}
        </ul>
      </div>
    )

}

export default SignUp
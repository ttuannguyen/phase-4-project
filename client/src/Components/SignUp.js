import React, { useContext, useState } from 'react';
import { UserContext } from '../context/user';
import { useNavigate } from 'react-router-dom';

const Auth = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    // const [login, setLogin] = useState('')
    const [errorsList, setErrorsList] = useState([])
    const { signup } = useContext(UserContext)
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            name: username,
            email,
            password,
            password_confirmation: passwordConfirmation
        }

        fetch('/signup',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(user => {
            // console.log(json)
            if(user.errors) {
                // reset
                setUsername('')
                setEmail('')
                setPassword('')
                setPasswordConfirmation('')
                // get the errors
                // look at issue: unique id 
                const errorItems = user.errors.map(e => <p key={e.id}>{e}</p>) 
                setErrorsList(errorItems) 
            } else {
                signup(user)
                navigate('/home')
            }
        })
    }

    return (
        <> 
          <h4>Signup</h4>
          <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
          <label>Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
          <label>Password Confirmation</label>
          <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/><br/>
          <button type="submit">Sign up!</button>
        </form>
        <ul>
            {errorsList}
        </ul>
      </>
    )

}

export default Auth
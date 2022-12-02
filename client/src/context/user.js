import React, { useState, useEffect } from "react";
import { json } from "react-router-dom";


const UserContext = React.createContext();

//any child hooked to the global will have access to the stateful variable(s); in our case we have user in state
const UserProvider = ({ children }) => {
    const [user, setUser] = useState({}); 
    const [loggedIn, setLoggedIn] = useState(false); // false = initial state is not logged in
    const [secretSpots, setSecretSpots] = useState([]);

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(json => {
            // console.log(json)
            setUser(json)
            if (json.error) {
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                fetchSecretSpots() // calling the function below
            }
            // json.error ? setLoggedIn(false) : setLoggedIn(true)
        })
    }, [])

    // get all spots
    const fetchSecretSpots = () => {
        fetch('/secret_spots')
        .then(res => res.json())
        .then(json => {
            // console.log(json)
            setSecretSpots(json)
        })
    }

    // add a spot
    const addSecretSpot = (formData) => {
        fetch('/secret_spots', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(newSecretSpot => {
            // console.log(newSecretSpot)
            setSecretSpots([...secretSpots, newSecretSpot])
        })
    }

    const login = (user) => {
        setUser(user)
        fetchSecretSpots()
        setLoggedIn(true)
    }

    const logout = () => {
        setUser({})
        setSecretSpots([])
        setLoggedIn(false)
    }

    const signup = (user) => { 
        setUser(user)
        fetchSecretSpots()
        setLoggedIn(true)
    }


    return (
        <UserContext.Provider value={{user, login, logout, signup, loggedIn, secretSpots, addSecretSpot}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
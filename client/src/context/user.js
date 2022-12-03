import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

//any child hooked to the global will have access to the stateful variable(s); in our case we have user in state
const UserProvider = ({ children }) => {
    const [user, setUser] = useState({}); 
    const [loggedIn, setLoggedIn] = useState(false); // false = initial state is not logged in
    const [allSecretSpots, setAllSecretSpots] = useState([]); // all the spots in db
    const [userSecretSpots, setUserSecretSpots] = useState([]); // user's spots in db
    const [visits, setVisits] = useState([]);

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
                fetchAllSecretSpots() // calling the function below
                fetchUserSecretSpots() // calling the function below
                fetchVisits() // calling the function below
            }
            // json.error ? setLoggedIn(false) : setLoggedIn(true)
        })
    }, [])

    // get all spots
    const fetchAllSecretSpots = () => {
        fetch('/all')
        .then(res => res.json())
        .then(json => {
            // console.log(json)
            setAllSecretSpots(json)
        })
    }
    
    // get user's spots
    const fetchUserSecretSpots = () => {
        fetch('/secret_spots')
        .then(res => res.json())
        .then(json => {
            // console.log(json)
            setUserSecretSpots(json)
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
            setUserSecretSpots([...userSecretSpots, newSecretSpot])
        })
    }

    // get all visits
    const fetchVisits = () => {
        fetch('/visits')
        .then(res => res.json())
        .then(json => {
        // console.log(json)
        setVisits(json)
        })
    }

    // helper functions for managing a user's session
    const signup = (user) => { 
        setUser(user)
        fetchAllSecretSpots()
        fetchUserSecretSpots()
        fetchVisits()
        setLoggedIn(true)
    }
    
    const login = (user) => {
        setUser(user)
        fetchAllSecretSpots()
        fetchUserSecretSpots()
        fetchVisits()
        setLoggedIn(true)
    }

    const logout = () => {
        setUser({})
        fetchAllSecretSpots([])
        fetchUserSecretSpots([])
        fetchVisits([])
        setLoggedIn(false)
    }

    return (
        <UserContext.Provider value={{user, login, logout, signup, loggedIn, allSecretSpots, userSecretSpots, visits, addSecretSpot}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
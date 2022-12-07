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
            setAllSecretSpots([...allSecretSpots, newSecretSpot])
        })
    }

    /* Visit CRUD */
    const fetchVisits = () => {
        fetch('/visits')
        .then(res => res.json())
        .then(json => {
        // console.log(json)
        setVisits(json)
        })
    }

    
    const addVisit = (formData) => {
        // console.log(formData)
        fetch('/visits', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(newVisit => {
            // console.log(newSecretSpot)
            setVisits([...visits, newVisit])
        })
    }

    const deleteVisit = (visit) => {
        // console.log("hitting delete in user context")
        // console.log(visit.id)
        fetch(`/visits/${visit.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            }
        })
        const updatedVisits = visits.filter(v => v.id !== visit.id) 
        setVisits(updatedVisits)
        // .then(res => res.json()) 
        // .then(deletedVisit => {
        //     // console.log(visit)
        //     const updatedVisits = visits.filter(visit => visit.id !== deletedVisit.id)
        //     setVisits(updatedVisits)
        // })
    }

    // helper functions for managing a user's session
    const signup = (user) => { 
        setUser(user)
        setLoggedIn(true)
        fetchAllSecretSpots()
        fetchUserSecretSpots()
        fetchVisits()
    }
    
    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
        fetchAllSecretSpots()
        fetchUserSecretSpots()
        fetchVisits()
    }

    const logout = () => {
        setUser({})
        setAllSecretSpots([])
        setUserSecretSpots([])
        setVisits([])
        setLoggedIn(false)
    }

    return (
        <UserContext.Provider value={{user, login, logout, signup, loggedIn, allSecretSpots, userSecretSpots, visits, addSecretSpot, addVisit, deleteVisit}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
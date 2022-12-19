import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

//any child hooked to the global will have access to the stateful variable(s); in our case we have user in state
const UserProvider = ({ children }) => {
    const [user, setUser] = useState({}); 
    const [loggedIn, setLoggedIn] = useState(false); // false = initial state is not logged in
    const [secretSpots, setSecretSpots] = useState([]); // all the spots in db
    // const [userSecretSpots, setUserSecretSpots] = useState([]); // user's spots in db
    const [visits, setVisits] = useState([]);

    // const getCurrentUser = () => {
    //     fetch('/me')
    //     .then(res => res.json())
    //     .then(json => {
    //         if (json.error) {
    //             setLoggedIn(false)
    //         } else (
    //             setLoggedIn(true)
    //         )
    //     })
    // }
    
    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(json => {
            if (json.error) {
                setLoggedIn(false)
            } else {
                // debugger
                setUser(json) // React re-rendered only 1 time and hit this 
                // setUserSecretSpots(json.secret_spots) // React did not re-render again to hit this
                // setVisits(json.visits) // React did not re-render again to hit this
                setLoggedIn(true)
                fetchSecretSpots() // calling the function below
            }
            // json.error ? setLoggedIn(false) : setLoggedIn(true)
        })
    },[])


    // get all spots
    const fetchSecretSpots = () => {
        fetch('/secret_spots')
        .then(res => res.json())
        .then(json => {
            // console.log(json)
            setSecretSpots(json)
        })
    }
    // de-nest some information, filter through to find the secret belong to the user 


    // add a spot
    const addSecretSpot = (newSecretSpot) => {
        // console.log(newSecretSpot)
        setSecretSpots([...secretSpots, newSecretSpot])
    }

    /* Visit CRUD */
    // TODO: try to see if we can set visits to state somewhere else so we don't do this fetch
    // const fetchVisits = () => {
    //     fetch('/visits')
    //     .then(res => res.json())
    //     .then(json => {
    //     // console.log(json)
    //     setVisits(json)
    //     })
    // }
    
    const addVisit = (newVisit) => {
        // setVisits([...visits, newVisit])
        const newVisits = [...user.visits, newVisit]
        user.visits = newVisits
        return user
    }
    
    const updateVisit = (updatedVisit) => {
        // console.log(updatedVisit.id)
        // const updatedVisits = visits.map(v => {
        //     if (v.id === updatedVisit.id) {
        //         return updatedVisit;
        //     } else {
        //         return v;
        //     }
        // })
        // console.log(updatedVisit)
        const updatedVisits = user.visits.map(v => v.id === updatedVisit.id ? updatedVisit : v)
        user.visits = updatedVisits
        return user
        // setVisits(updatedVisits)
        // fetchUserSecretSpots() // to immediately display changes

    }

    const deleteVisit = (visit) => {
        // console.log("hitting delete in user context")
        console.log(visit)
        // fetch(`/visits/${visit.id}`, {
        //     method: "DELETE",
        //     headers: {
        //       "Content-Type": "application/json",
        //     }
        // })
        // const updatedVisits = user.visits.filter(v => v.id !== visit.id) 
        // user.visits = updatedVisits
        // return user
        // setVisits(updatedVisits)
        // TODO: Make associated spot disappear right away after the deleting the visit
        // fetchUserSecretSpots() // to immediately display changes
    }

    // helper functions for managing a user's session
    const signup = (user) => { 
        setUser(user)
        setLoggedIn(true)
        fetchSecretSpots()
        // fetchUserSecretSpots()
        // fetchVisits()
    }
    
    const login = (user) => {
        setUser(user) //
        setLoggedIn(true) //
        fetchSecretSpots()
    }

    const logout = () => {
        setLoggedIn(false)
        setUser({})
        setSecretSpots([])
        // setUserSecretSpots([])
        setVisits([])
    }

    return (
        <UserContext.Provider value={
            {user, login, logout, signup, loggedIn, secretSpots, visits, addSecretSpot, addVisit, updateVisit, deleteVisit, fetchSecretSpots}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
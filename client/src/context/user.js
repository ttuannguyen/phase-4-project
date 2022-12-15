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
            // console.log(json.visits)
            if (json.error) {
                setLoggedIn(false)
            } else {
                setUser(json)
                setUserSecretSpots(json.secret_spots)
                setVisits(json.visits)
                setLoggedIn(true)
                // fetchAllSecretSpots() // calling the function below
                // fetchUserSecretSpots() // calling the function below
                // fetchVisits() // calling the function below
            }
            // json.error ? setLoggedIn(false) : setLoggedIn(true)
        })
    },[])

    console.log(user)
    console.log(visits)
    console.log(userSecretSpots)
    console.log(loggedIn)


    // fetch('/me')
    // .then(res => res.json())
    // .then(json => {
    //     // console.log(json.visits)
    //     if (json.error) {
    //         setLoggedIn(false)
    //     } else {
    //         console.log(json.secret_spots)
    //         setUser(json)
    //         setUserSecretSpots(json.secret_spots)
    //         setVisits(json.visits)
    //         setLoggedIn(true)
    //         // fetchAllSecretSpots() // calling the function below
    //         // fetchUserSecretSpots() // calling the function below
    //         // fetchVisits() // calling the function below
    //     }
    //     // json.error ? setLoggedIn(false) : setLoggedIn(true)
    // })



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
    // const fetchUserSecretSpots = () => {
    //     fetch('/secret_spots')
    //     .then(res => res.json())
    //     .then(json => {
    //         // console.log(json)
    //         setUserSecretSpots(json)
    //     })
    // }

    // add a spot
    const addSecretSpot = (newSecretSpot) => {
        // console.log(newSecretSpot)
        setAllSecretSpots([...allSecretSpots, newSecretSpot])
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
        // console.log(formData)
        fetch('/visits')
        .then(res => res.json())
        .then(json => {
        // console.log(json)
        setVisits(json)
        })
        setVisits([...visits, newVisit])
        // fetchUserSecretSpots() // to immediately display changes
        
        // fetch('/visits', {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(formData)
        // })
        // .then(res => res.json())
        // .then(newVisit => {
        //     // console.log(newSecretSpot)
        //     setVisits([...visits, newVisit])
        //     fetchUserSecretSpots() // to immediately display changes
        // })
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
        const updatedVisits = visits.map(v => v.id === updatedVisit.id ? updatedVisit : v)
        setVisits(updatedVisits)
        // fetchUserSecretSpots() // to immediately display changes

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
        // TODO: Make associated spot disappear right away after the deleting the visit
        // fetchUserSecretSpots() // to immediately display changes
    }

    // helper functions for managing a user's session
    const signup = (user) => { 
        setUser(user)
        setLoggedIn(true)
        fetchAllSecretSpots()
        // fetchUserSecretSpots()
        // fetchVisits()
    }
    
    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
        fetchAllSecretSpots()
        // fetchUserSecretSpots()
        // fetchVisits()
    }

    const logout = () => {
        setUser({})
        setAllSecretSpots([])
        setUserSecretSpots([])
        setVisits([])
        setLoggedIn(false)
    }

    return (
        <UserContext.Provider value={
            {user, login, logout, signup, loggedIn, allSecretSpots, userSecretSpots, visits, addSecretSpot, addVisit, updateVisit, deleteVisit}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
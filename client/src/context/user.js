import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

//any child hooked to the global will have access to the stateful variable(s); in our case we have user in state
const UserProvider = ({ children }) => {
    const [user, setUser] = useState({}); 
    const [loggedIn, setLoggedIn] = useState(false); // false = initial state is not logged in
    const [secretSpots, setSecretSpots] = useState([]); // all the spots in db
    // const [userSecretSpots, setUserSecretSpots] = useState([]); // user's spots in db
    const [visits, setVisits] = useState([]);
    
    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(json => {
            if (json.error) {
                setLoggedIn(false)
            } else {
                setUser(json) 
                setLoggedIn(true)
  
            }
        })
    }, [])

    // useEffect(() => {
    //     fetch('/me')
    //     .then(res => res.json())
    //     .then(json => {
    //         if (json.error) {
    //             setLoggedIn(false)
    //         } else {
    //             // debugger
    //             setUser(json) // React re-rendered only 1 time and hit this 
    //             setLoggedIn(true)
    //             // setSecretSpots(json.secret_spots) // React did not re-render again to hit this
    //             // setVisits(json.visits) // React did not re-render again to hit this
    //             // fetchSecretSpots() // calling the function below
    //         }
    //         // json.error ? setLoggedIn(false) : setLoggedIn(true)
    //     })
    // }, [])

    useEffect(() => {
        if (user.id) {
            setVisits(user.visits) 
        } else {
            setVisits([])
        }
    }, [user])


    // get all spots => moved to a component
    const fetchSecretSpots = () => {
        fetch('/secret_spots')
        .then(res => res.json())
        .then(json => {
            // console.log(json)
            setSecretSpots(json)
        })
    }

    // add a spot
    const addSecretSpot = (newSecretSpot) => {
        console.log(newSecretSpot)
        setSecretSpots([...secretSpots, newSecretSpot])
    }

    /* Visit CRUD */
    
    const addVisit = (newVisit) => {
        // setVisits([...visits, newVisit])
        const newVisits = [...user.visits, newVisit]
        setUser({...user, visits: newVisits })
        // user.visits = newVisits
        // return user
    }
    
    const updateVisit = (updatedVisit) => {
        const updatedVisits = user.visits.map(v => v.id === updatedVisit.id ? updatedVisit : v)
        // user.visits = updatedVisits
        // return user
        setUser({...user, visits: updatedVisits })
    }

    // const deleteVisit = (visit) => {
    // }

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
        // setSecretSpots([])
        // setUserSecretSpots([])
        setVisits([])
    }

    console.log(loggedIn)

    return (
        <UserContext.Provider value={
            {
                user, 
                login, 
                logout, 
                signup, 
                loggedIn, 
                visits, 
                secretSpots,
                addSecretSpot, 
                addVisit, 
                updateVisit,
                fetchSecretSpots,
                setVisits
            }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
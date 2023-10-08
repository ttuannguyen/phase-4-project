import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        id: null,
        username: "",
        secret_spots: [],
        visits: []
    }); 
    const [loggedIn, setLoggedIn] = useState(false); 
    const [secretSpots, setSecretSpots] = useState([]); 
    const [userSecretSpots, setUserSecretSpots] = useState([]); 
    const [visits, setVisits] = useState([]);
    const [toggle, setToggle] = useState(false);

    // console.log(userSecretSpots)
    // console.log(visits)

    
    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(json => {
            if (json.error) {
                setLoggedIn(false)
            } else {
                setUser(json) 
                setLoggedIn(true)
                fetchSecretSpots()
            }
        })
    }, [toggle])

    useEffect(() => {
        if (user.id) {
            setUserSecretSpots(user.secret_spots)
            setVisits(user.visits)
        } else {
            setUserSecretSpots([])
            setVisits([])
        }
    }, [user])


    const fetchSecretSpots = () => {
        fetch('/secret_spots')
        .then(res => res.json())
        .then(json => {
            setSecretSpots(json)
        })
    }

    const addSecretSpot = (newSecretSpot) => {
        setSecretSpots([...secretSpots, newSecretSpot])
        // fetchSecretSpots()
    }

    /* Visit CRUD */
    const addVisit = (newVisit) => {
        const newVisits = [...user.visits, newVisit]
        setUser({...user, visits: newVisits })
   
    }
    
    const updateVisit = (updatedVisit) => {
        const updatedVisits = user.visits.map(v => v.id === updatedVisit.id ? updatedVisit : v)
        setUser({...user, visits: updatedVisits })
    }


    const signup = (user) => { 
        setUser(user)
        setLoggedIn(true)
        fetchSecretSpots()
    }
    
    const login = (user) => {
        setUser(user) 
        setLoggedIn(true) 
        fetchSecretSpots()
    }

    const logout = () => {
        setLoggedIn(false)
        setUser({})
        setVisits([])
    }

    return (
        <UserContext.Provider value={
            {
                user, 
                login, 
                logout, 
                signup, 
                loggedIn, 
                visits, 
                userSecretSpots,
                secretSpots,
                addSecretSpot, 
                addVisit, 
                updateVisit,
                fetchSecretSpots,
                setVisits,
                toggle,
                setToggle
            }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
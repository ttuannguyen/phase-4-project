import React, { useState, useEffect } from "react";


const UserContext = React.createContext();

//any child hooked to the global will have access to the stateful variable(s); in our case we have user in state
const UserProvider = ({ children }) => {
    const [user, setUser] = useState({}); 
    const [loggedIn, setLoggedIn] = useState(false); // false = initial state is not logged in

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(json => {
            // console.log(json)
            setUser(json)
            json.error ? setLoggedIn(false) : setLoggedIn(true)
        })
    }, [])

    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    const logout = () => {
        setUser({})
        setLoggedIn(false)
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
    }


    return (
        <UserContext.Provider value={{user, login, logout, signup, loggedIn }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
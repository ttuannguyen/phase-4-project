import React, { useState, useEffect } from "react";


const UserContext = React.createContext();

//any child hooked to the global will have access to the stateful variable(s)
// in our case, we have the user in state
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); 

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(json => {
            setUser(json)
        })
    }, [])

    const login = () => {

    }

    const logout = () => {

    }

    const signup = () => {

    }


    return (
        <UserContext.Provider value={{ user, login, logout, signup }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
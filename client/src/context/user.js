import React, { useState, useContext, useEffect, useCallback } from "react";


const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); 

    // const getCurrentUser = async () => {
    //     const res = await fetch('/me')
    //     if (res.status === 200) {
    //         const data = await res.json()
    //         debugger
    //     } else {
    //         const errorObj = await res.json()
    //         console.log(errorObj) 
    //     }
    // }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
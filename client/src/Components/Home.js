import React, { useContext } from 'react';
import { UserContext } from '../context/user';

const Home = () => {
  const { user } = useContext(UserContext)

  if (!user || user.error ) {
    return (<p>Please Login or Create an Account</p>)
  } else {
    return (
      // This section is no longer needed as we have the "if (user)" logic in Navbar
      <div>
        <h4>Welcome to {user.name}'s Home Page</h4>
      </div>
    ) 
  }
}

export default Home
import React, { useContext } from 'react';
import { UserContext } from '../context/user';

const Home = () => {
  const { user, loggedIn } = useContext(UserContext)

  if (loggedIn) {
    return (
      <div>
        <h4>Welcome to your Home Page, {user.name}</h4>
      </div>
    )
  } else {
    return (<h4>Please login or create an account</h4>)
  } 
  
  // if (!user || user.error ) {
  //   return (<p>Please Login or Create an Account</p>)
  // } else {
  //   return (
  //     // This section is no longer needed as we have the "if (user)" logic in Navbar
  //     <div>
  //       <h4>This is {user.name}'s Home Page</h4>
  //     </div>
  //   ) 
  // }
}

export default Home
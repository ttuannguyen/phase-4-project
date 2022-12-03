import React, { useContext } from 'react';
import { UserContext } from '../context/user';

const Home = () => {
  const { user, loggedIn, allSecretSpots } = useContext(UserContext);

  console.log(allSecretSpots)

  const allSecretSpotsList = allSecretSpots.map(s => <li key={s.id}>{s.name}</li>)

  if (loggedIn) {
    return (
      <div>
        <h4>Welcome to your Home Page, {user.name}</h4>
        <h4>Here is the list of all the Secret Spots</h4>
        {allSecretSpotsList}
        <p>Don't see one? Add a new spot!</p>
      </div>
    )
  } else {
    return (<h4>Please login or create an Account</h4>)
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
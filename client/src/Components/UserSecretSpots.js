import React, { useContext } from 'react';
// import { Route, useParams } from 'react-router-dom';
import { UserContext  } from '../context/user';
import Visit from './Visit';

const UserSecretSpots = () => {

  const { userSecretSpots, loggedIn } = useContext(UserContext);
  
  // TODO: conditional to allow the fetch to be done
  const secretSpots = userSecretSpots.map(secretSpot => {
    
    const visits = secretSpot.user_visits.map(visit => {
      return (
        <Visit key={visit.id} visit={visit} spot={visit.secret_spot} date={visit.date} note={visit.note} />
      )
    })

    return (
      <div key={secretSpot.id}>
        <h4>{secretSpot.name}</h4>
        {visits}
      </div>
    )
  })


  if (loggedIn) {
    return (
      <div>
        <h3>Here are your Secret Spots</h3>
        {secretSpots}
      </div>
    )
  } else {
    return (<h4>Please login or create an Account</h4>)
  }
}

export default UserSecretSpots




// const allSecretSpots = userSecretSpots.map(secretSpot => <li key={secretSpot.id}>{secretSpot.name}</li>)
// const allSecretSpots = secretSpots.map(secretSpot => <SecretSpot secretSpot={secretSpot} key={secretSpot.id}/>)
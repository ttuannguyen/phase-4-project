import React, { useContext } from 'react';
// import { Route, useParams } from 'react-router-dom';
import { UserContext  } from '../context/user';
import Visit from './Visit';

const UserSecretSpots = () => {

  const { secretSpots, loggedIn } = useContext(UserContext);
  // console.log(user.secret_spots)


  const filterUserSecretSpots = secretSpots.filter(s => s.user_visits.length > 0)
  // console.log(filterUserSecretSpots)
  
  const userSecretSpots = filterUserSecretSpots.map(s => {
    
    const visits = s.user_visits.map(visit => {
      // console.log(visit)
      return (
        <Visit key={visit.id} visit={visit} spot={visit.secret_spot} date={visit.date} note={visit.note} />
      )
    })

    return (
      <div key={s.id}>
        <h4>{s.name}</h4>
        {visits}
      </div>
    )
  })


  if (loggedIn) {
    return (
      <div >
        <h3>Here are your Secret Spots</h3>
        {userSecretSpots}
      </div>
    )
  } else {
    return (<h4>Please login or create an Account</h4>)
  }
}

export default UserSecretSpots




// const allSecretSpots = userSecretSpots.map(secretSpot => <li key={secretSpot.id}>{secretSpot.name}</li>)
// const allSecretSpots = secretSpots.map(secretSpot => <SecretSpot secretSpot={secretSpot} key={secretSpot.id}/>)
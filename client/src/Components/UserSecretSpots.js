import React, { useContext, useEffect } from 'react';
// import { Route, useParams } from 'react-router-dom';
import { UserContext  } from '../context/user';
import Visit from './Visit';

const UserSecretSpots = () => {

  const { user, loggedIn, userSecretSpots } = useContext(UserContext);

  // ISSUE: CRUD actions don't display changes right away until after page refresh
  
  // METHOD 1: Based on global data in user context
  const userDataToDisplay = userSecretSpots.map(s => {
    const visits = s.user_visits.map(visit => {
      return (
        <Visit key={visit.id} visit={visit} />
      )
    })
   
      return (
        <div key={s.id}>
          <h4>{s.name}</h4>
          {visits}
        </div>
    )
  })

  // METHOD 2: Based on the fetch in App.js; need to receive secretSpots as prop
  // const filterUserSecretSpots = secretSpots.filter(s => s.user_visits.length > 0)
  // const userSecretSpots = filterUserSecretSpots.map(s => {
    // const visits = s.user_visits.map(visit => {
    //   return (
    //     <Visit key={visit.id} visit={visit} spot={visit.secret_spot} date={visit.date} note={visit.note} />
    //   )
    // })

  //   return (
  //     <div key={s.id}>
  //       <h4>{s.name}</h4>
  //       {visits}
  //     </div>
  //   )
  // })

  if (loggedIn) {
    return (
      <div >
        <h3>Here are your Secret Spots</h3>
        {userDataToDisplay}
      </div>
    )
  } else {
    return (<h4>Please login or create an Account</h4>)
  }
}

export default UserSecretSpots




// const allSecretSpots = userSecretSpots.map(secretSpot => <li key={secretSpot.id}>{secretSpot.name}</li>)
// const allSecretSpots = secretSpots.map(secretSpot => <SecretSpot secretSpot={secretSpot} key={secretSpot.id}/>)
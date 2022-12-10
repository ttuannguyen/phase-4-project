import React, { useContext } from 'react';
// import { Route, useParams } from 'react-router-dom';
import { UserContext  } from '../context/user';
import Visit from './Visit';

const UserSecretSpots = () => {

  const { user, userSecretSpots, visits, loggedIn } = useContext(UserContext);
  
  const secretSpots = userSecretSpots.map(secretSpot => {
    
    // console.log(secretSpot.visits) => shows all visits to the spot in question from all users
    // TODO: Is there a way to send back only the user's visits only so we don't filter the visits?
    const filteredVisits = secretSpot.visits.filter(v => v.user === user.name)
    // console.log(filteredVisits)
    
    const visits = filteredVisits.map(visit => {
      return (
        // <li key={v.id}>Visit: {v.date} | Note: {v.note}</li>
        <Visit key={visit.id} visit={visit} spot={visit.secret_spot} date={visit.date} note={visit.note} />
      )
    })

    // OG Code: Rendered the visits from other users also
    // const visits = secretSpot.visits.map(v => {
    //   return (
    //     <li key={v.id}>Visit: {v.date} | Note: {v.note}</li>
    //   )
    // })

    return (
      <div key={secretSpot.id}>
        <h4>{secretSpot.name}</h4>
        {visits}
      </div>
    )
  })

  // const allVisits = visits.map(visit => {
  //   return (
  //     <Visit key={visit.id} visit={visit} spot={visit.secret_spot} date={visit.date} note={visit.note} />
  //   )
  // })

  if (loggedIn) {
    return (
      <div>
        <h3>Here are your Secret Spots</h3>
        {secretSpots}
        {/* <h3>Here are your Visits</h3> */}
        {/* {allVisits} */}
      </div>
    )
  } else {
    return (<h4>Please login or create an Account</h4>)
  }
}

export default UserSecretSpots




// const allSecretSpots = userSecretSpots.map(secretSpot => <li key={secretSpot.id}>{secretSpot.name}</li>)
// const allSecretSpots = secretSpots.map(secretSpot => <SecretSpot secretSpot={secretSpot} key={secretSpot.id}/>)


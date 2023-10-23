import React, { useContext } from 'react';
// import { Route, useParams } from 'react-router-dom';
import { UserContext  } from '../context/user';
import Visit from './Visit';
import { Card } from 'react-bootstrap';

const UserSecretSpots = () => {

  const { loggedIn, secretSpots } = useContext(UserContext);


  const filteredSecretSpots = secretSpots.filter(s => s.visits.length !== 0)
  
  const secretSpotsList = filteredSecretSpots.map(s => {

      const visits = s.visits.map(visit => {
      return (
        <div key={visit.id}>
          <Visit key={visit.id} visit={visit} />
        </div>
      )
    })

    return (
      <Card key={s.id}>
        <h4>{s.name}</h4>
        {visits}
      </Card>
  )
  })


  // const userDataToDisplay = userSecretSpots.map(s => {
  //   const visits = s.user_visits.map(visit => {
  //     return (
  //       <div key={visit.id}>
  //         <Visit key={visit.id} visit={visit} />
  //       </div>
  //     )
  //   })
   
  //     return (
  //       <div key={s.id}>
  //         <h4>{s.name}</h4>
  //         {visits}
  //       </div>
  //   )
  // })

  if (loggedIn) {
    return (
      <div >
        <h3>Here are your Secret Spots</h3>
        {secretSpotsList}
      </div>
    )
  } else {
    return (<h4>Please login or create an Account</h4>)
  }
}

export default UserSecretSpots



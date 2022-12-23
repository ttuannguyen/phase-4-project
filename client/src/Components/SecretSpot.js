import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import SecretSpotDetails from './SecretSpotDetails';
import VisitAddForm from './VisitAddForm';

const SecretSpot = ({secretSpot}) => {
  // console.log(secretSpot)
  const {id} = useParams();
  const [visitFormToggle, setVisitFormToggle] = useState(false); // to expose the visit add form
  const afterAddVisit = () => setVisitFormToggle(false)

  const [spotObject, setSpotObject] = useState(null)
  const [visits, setVisits] = useState([])



  return (
    <div className='secret-spot-div'>
      <h4>{secretSpot.name}</h4>
      <p>{secretSpot.description}</p>
      <p>Location: {secretSpot.location}</p>
      <p>Cost: {secretSpot.cost}</p>
      {visitFormToggle ? <VisitAddForm secretSpot={secretSpot} afterAddVisit={afterAddVisit} /> : <button class='visit-add-btn' onClick={() => setVisitFormToggle(true)}>Add a Visit!</button>}

      {/* The link below takes you to the show page */}
      {/* <Link class='spot-link' secretSpot={secretSpot} to={`/secret_spots/${secretSpot.id}`}>
        <h4>{secretSpot.name}</h4>
      </Link> */}
    </div>
  )
}

export default SecretSpot
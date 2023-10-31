import React from 'react'
import { Carousel } from 'react-bootstrap'

const LandingPage = () => {
  return (
    <Carousel data-bs-theme="dark" className='my-4'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.cntraveler.com/photos/63483e15ef943eff59de603a/16:9/w_1280%2Cc_limit/New%2520York%2520City_GettyImages-1347979016.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 style={{ color: 'white' }}>Discover Exciting Hidden Gems in The Big Apple</h5>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i0.wp.com/urbnexplorer.com/wp-content/uploads/2019/08/2019-08-07-nyc-waterfall-03.jpg?w=1200&ssl=1"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 style={{ color: 'white' }}>Share A Secret Spot With The Community</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://yourbrooklynguide.com/wp-content/uploads/2021/04/Bushwick-Collective-mural-in-Brooklyn-862x575.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 style={{ color: 'white' }}>Have Fun On Your Adventures</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default LandingPage
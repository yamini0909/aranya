import React from 'react'
import Header from './Header'
import Circle from "../images/circle.png"

const LandingPage = () => {
  return (
    <div className="bg-cnt">
    <div className="overlay">
      <Header/>
     
    </div>
    <div className='main-cnt white'>
            <button className='mumbai'>Mumbai</button>
            <div>
              <h1 className='heading-main'>PROJECT</h1>
              <h1 className='heading-main'>ARANYA</h1>
              <h3 className='subheading-main'>Pirimal Groups</h3>
            </div>
            <div>
              <img src={Circle}/>
            </div>
      </div>
  </div>
  )
}

export default LandingPage
import React from 'react'

import CasinoContent from './CasinoContent';



export default function Casino() {
  return (
    <div>
      <h1 className="casino-overview"
        style={{
          margin: "15px auto", 
          textAlign: "center", 
          color: "#ce5a57"}}>
            Casino Overview
      </h1>
      <h5 style={{
          margin: "0 auto", 
          textAlign: "center", 
          color: "white",
          width:"50%"
          }}>"At our SANMO casino, the latest in technology meets the familiar games you’ve grown to love. 
        Slots and video poker take on an exhilarating new meaning and give you more promise of a thrilling, 
        life-changing experience, while your favorite classic Las Vegas table games take on a touch of modern luxury. 
        Adding to the excitement, you’re also invited to look through the floor-to-ceiling glass walls and enjoy views 
        of the Las Vegas Strip."</h5>
        <br></br>
    <CasinoContent/>
    </div>
  )
}


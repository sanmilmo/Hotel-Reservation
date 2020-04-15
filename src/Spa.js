import React from 'react'
import SpaGrid from './SpaGrid';

export default function Spa() {
    return (
        <div style={{color: "white"}}>
            <h5 style={{
          margin: "15px auto", 
          fontSize: "4rem", 
          textAlign: "center"}}>SAHRA SPA, SALON & HAMMAM</h5>
          <p style={{
          margin: "0 auto", 
          textAlign: "center",
          width:"50%",
          fontFamily: "Comic Neue, cursive"}}> Retreat to a Las Vegas spa oasis of luxury and rejuvenation</p>
          <p style={{
          margin: "30px auto", 
          width:"80%"}}>Inspired by the desert’s ever-expanding canopy of sky, mystifying sand sculptures, and enchanting, moonlit nights, Sahra is a Las Vegas spa that changes perspectives, opening windows to a world of unique experiences. Seemingly simple yet wonderfully complex, we draw from the desert’s unexpected depth and beauty, unanticipated life, and profound strength. We believe the desert’s striking contrasts – exhilarating intensity combined with ageless stillness and peace – create a path to balance, clarity, and calm.</p>
          <br></br>
          <SpaGrid/>
        </div>
    )
}

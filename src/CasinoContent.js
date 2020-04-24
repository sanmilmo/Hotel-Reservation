import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";



export default function CasinoContent() {
  
  return (
    <MDBContainer style={{marginTop: "50px", color: "white"}}>
        <MDBRow>
          <MDBCol md="6">
            <img src="./images/casinoOne.jpg" className="img-fluid z-depth-1" alt="casino"/>
          </MDBCol>

          <MDBCol md="6" >
                <h4 style={{color: "#ce5a57"}}>Identity & Rewards</h4>
                <p>"Identity Members are invited to play and win on slots in our 100,000 square-foot casino. 
                With enticing prizes ranging from free Identity Play to thousands in cash, 
                The Cosmopolitan offers you unique gaming experiences and more chances to win."</p>
          </MDBCol>
        </MDBRow>
        <hr></hr>
        <MDBRow>
          <MDBCol md="6">
            <img src="./images/casinoTwo.jpg" className="img-fluid z-depth-1" alt="casinoMachine"/>
          </MDBCol>
          <MDBCol md="6" >
                <h4 style={{color: "#ce5a57"}}>JIN JI BAO XI – ENDLESS TREASURES</h4>
                <p>"The #1 game series in Asia, Jin Ji Bao Xi™, is back and introducing the sensational game, 
                Endless Treasure™. Game features include the Jin Ji Bao Xi Feature where players pick for jackpots. If six or more 
                Red Gong symbols displaying credit prizes land on the reels, a Feature Selection is triggered and the sum of the prizes
                creates the Shou Bonus. Players choose between Free Games where Gold Gong symbols award the Shou Bonus, and a Top Up™ 
                Bonus,."</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  );
}

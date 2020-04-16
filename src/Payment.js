import React from 'react'
import { MDBRow, MDBCol, MDBContainer,MDBInput} from "mdbreact";
import { FaCcVisa, FaCcMastercard, FaCcDinersClub, FaCcPaypal } from 'react-icons/fa';


export default function Payment() {
    return (
      
        <MDBContainer style={{ color: "black", justifyContent: "center", width: "50%"}}>
            <MDBRow>
                <MDBCol >
                  
                <h1>Payment Method</h1>
                <div className="form-group">
                    <MDBInput  hint="Name on card"/>
                    <MDBInput hint="Card Number" />
                    <MDBInput hint="MM/YY" />
                    <MDBInput hint="CVC" />
                    <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
                            <label class="custom-control-label" for="defaultUnchecked">Notify me about special offers</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
                            <label class="custom-control-label" for="defaultUnchecked">Use the same address as contact information.</label>
                    </div>
                    </div >
                    <p>Prices in CAD shown are for informational purposes only. Deposits and total charges will be charged in USD.</p>
                
                    <div class="custom-control custom-checkbox custom-control-inline">
                    <input type="checkbox" class="custom-control-input" id="defaultInline1"></input>
                    <label class="custom-control-label" for="defaultInline1"><h1><FaCcVisa/></h1></label>
                    </div>
                    <div class="custom-control custom-checkbox custom-control-inline">
                    <input type="checkbox" class="custom-control-input" id="defaultInline2"></input>
                    <label class="custom-control-label" for="defaultInline2"><h1><FaCcMastercard/></h1></label>
                    </div>
                    <div class="custom-control custom-checkbox custom-control-inline">
                    <input type="checkbox" class="custom-control-input" id="defaultInline3"></input>
                    <label class="custom-control-label" for="defaultInline3"><h1><FaCcDinersClub/></h1></label>
                    </div>
                    <div class="custom-control custom-checkbox custom-control-inline">
                    <input type="checkbox" class="custom-control-input" id="defaultInline3"></input>
                    <label class="custom-control-label" for="defaultInline3"><h1><FaCcPaypal/></h1></label>
                    </div>
                
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        
    )
}

{/* <input placeholder="Username" type="text" onChange={(e) => setUserName(e.target.value)}/> */}
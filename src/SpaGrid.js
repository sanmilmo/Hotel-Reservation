import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";

class SpaGrid extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="mb-3">
          <img src="./images/spaMassage.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-3">
          <img src="./images/spaSauna.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3">
            <img src="./images/spaPool.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3">
            <img src="./images/spaFacial.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="6" className="mb-3">
          <img src="./images/spaRocks.jpg" className="img-fluid z-depth-1" alt="" />
        </MDBCol>
        <MDBCol md="6" className="mb-3">
          <img src="./images/spaBeds.jpg" className="img-fluid z-depth-1" alt="" / >
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
}

export default SpaGrid;
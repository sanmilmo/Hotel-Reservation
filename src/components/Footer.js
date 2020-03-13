import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 my-footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">THE SANMO OF LAS VEGAS HOTEL</h5>
            <p>3708 Las Vegas Boulevard South</p>
            <p>Las Vegas, NV  89109</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <h5>Sandra Moya</h5>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
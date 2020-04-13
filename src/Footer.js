import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FaFacebookSquare, FaInstagram, FaTwitter, FaSnapchatGhost,  } from 'react-icons/fa';


const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 my-footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">THE SANMO OF LAS VEGAS HOTEL</h5>
            <p>3708 Las Vegas Boulevard South</p>
            <p>Las Vegas, NV  89109</p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">GENERAL RESORT INQUIRIES</h5>
            <p>702.698.7000</p>
          </MDBCol>
          <MDBCol md="5" >
            <h5 className="title">CONNECT WITH US</h5>
            <div className="icons-bu">
              <a href="http://twitter.com" alt="Twitter Logo"><FaTwitter /></a>
              <a href="http://facebook.com" alt="Facebook Logo"><FaFacebookSquare /></a>
              <a href="http://instagram.com" alt="Instagram Logo"><FaInstagram /></a>
              <a href="http://snapchat.com" alt="Snapchat Logo"><FaSnapchatGhost /></a>
            </div>
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
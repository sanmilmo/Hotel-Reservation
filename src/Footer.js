import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FaFacebookSquare, FaInstagram, FaTwitter, FaSnapchatGhost, FaHotel } from 'react-icons/fa';


const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 my-footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            
            <h5>SANMO Hotel < FaHotel/></h5>
            <p>3708 Las Vegas Boulevard South</p>
            <p>Las Vegas, NV  89109</p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">GENERAL RESORT INQUIRIES</h5>
            <a href="tel:702.698.7000"><span itemprop="telephone">702.698.7000</span></a>
          </MDBCol>
          <MDBCol md="5" >
            <h5 className="title">CONNECT WITH US</h5>
            <h4><FaTwitter/> <FaFacebookSquare/> <FaInstagram/> <FaSnapchatGhost/></h4>
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
import React from "react";
import SocialMedia from "../../pages/SocialMedia"
//import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
//import SocialButtonsContainer from 'react-social-media-buttons';

const FooterPage = () => {
  return (
    <div className="footer">
      <SocialMedia/>
    <p> © {new Date().getFullYear()} Tank Mania | All Rights Reserved</p>

    </div>

  );
}

export default FooterPage;



// {/* <SocialButtonsContainer
// links={['https://www.facebook.com/facebook','https://twitter.com/Twitter','https://www.instagram.com/instagram/','https://www.linkedin.com/company/linkedin/']}
// buttonStyle={{margin: '10px 10px', backgroundColor: '#07a9a9', borderRadius: '30%' , marginLeft: '140px', marginRight: '120px'}}
// iconStyle={{color: '#032345'}}
// openNewTab={true}
// /> */}
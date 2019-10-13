import React from "react";

import { Container } from "reactstrap"

import {CustomNavbar} from '../Navbars/CustomNavbar'

import './LandingPageHeader.scss'

const LandingPageHeader = (props) => {
  return (
    <>
      <div className="page-header page-header-small">
        <CustomNavbar {...props}/>
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/landing-bg.jpg") + ")"
          }}
        />
        <div className="content-center">
          <Container>
            <h1 className="title">Amal Taznaqt</h1>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;

import React from "react";

import { Container } from "reactstrap"

import './LandingPageHeader.scss'

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      }
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      }
    }
  })

  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/landing-bg.jpg") + ")"
          }}
          ref={pageHeader}
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
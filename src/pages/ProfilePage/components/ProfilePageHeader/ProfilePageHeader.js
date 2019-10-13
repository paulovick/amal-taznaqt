import React from "react"

import { Container } from "reactstrap";

import './ProfilePageHeader.scss'
import {CustomNavbar} from "../../../LandingPage/components/Navbars/CustomNavbar";

function ProfilePageHeader(props) {
    console.log(props)
    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth > 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });
    return (
        <>
            <div
                className="page-header clear-filter page-header-small"
                filter-color="blue"
            >
                <CustomNavbar {...props}/>
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")"
                    }}
                    ref={pageHeader}
                />
                <Container>
                    <div className="photo-container">
                        <img alt="..." src={props.volunteerImg} className="photo rounded-circle img-fluid img-raised" />
                    </div>
                    <h3 className="title">{props.volunteerName}</h3>
                    <p className="category">{props.volunteerCity}</p>
                </Container>
            </div>
        </>
    );
}

export { ProfilePageHeader }
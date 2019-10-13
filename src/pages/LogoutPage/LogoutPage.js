import React from "react";
import { logout } from "../../services/userService"
import LandingPageHeader from "../LandingPage/components/LandingPageHeader/LandingPageHeader";

class LogoutPage extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        logout();
        this.props.history.push({pathname: '/', attr:{history:this.props.history}});
    }


    render() {

        return (
            <>
                <LandingPageHeader {...this.props}/>
            </>
        )
    }



};

export { LogoutPage }

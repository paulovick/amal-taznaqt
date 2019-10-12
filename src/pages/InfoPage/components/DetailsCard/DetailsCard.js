import React, { Component } from "react";
import './DetailsCard.scss'
import LandingPageHeader from "../../../LandingPage/components/LandingPageHeader/LandingPageHeader";


class DetailsCard extends React.Component {
    constructor(props) {
        super(props);

        console.log(props)

        this.state = {}

    }

    componentDidMount() {
        console.log(this.props)

    }


    render() {
        return (
            <>
                <LandingPageHeader/>
            </>
        )
    }



};

export { DetailsCard }
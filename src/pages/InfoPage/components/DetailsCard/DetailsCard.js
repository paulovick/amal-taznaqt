import React from "react";
import './DetailsCard.scss'
import LandingPageHeader from "../../../LandingPage/components/LandingPageHeader/LandingPageHeader";


class DetailsCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }


    render() {

        let iframe = '<iframe\n' +
            '  src="'+ this.props.location.attr.url + '" \n' +
            '  allow="camera; microphone; autoplay; encrypted-media;"\n' +
            '  width="350px"\n' +
            '  height="500px"\n' +
            '  style="border: none"\n' +
            '>\n' +
            '</iframe>';

        let iframe_html = () => {
            return {
                __html: iframe
            }
        }


        return (
            <>
                <LandingPageHeader/>
                <div className={'details-card-container'}>
                    <div dangerouslySetInnerHTML={ iframe_html() } />
                    <div className={'details-card-text-wrapper'}>
                        <h2 className="title">{this.props.location.attr.title}</h2>
                        <span>
                            {this.props.location.attr.text}
                        </span>
                    </div>
                </div>
            </>
        )
    }



};

export { DetailsCard }

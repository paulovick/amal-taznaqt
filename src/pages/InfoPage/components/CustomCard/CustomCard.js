import React, { Component } from "react";
import './CustomCard.scss'

import{
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Button
} from "reactstrap";


class CustomCard extends React.Component {
    constructor(props) {
        super(props);

        console.log(props)

        this.state = {}

    }

    componentDidMount() {
        //window.VIDEOASK_EMBED_CONFIG.url = this.props.urlVideoAsk;
        console.log(this.props)

    }

    showCardDetails(e){
        this.props.attr.props.history.push({pathname: '/info/details', attr: this.props})
    }

    render() {
        return (
            <div className={'card-container'}>
                <Card style={{ width: "20rem" }}>
                    <img
                        alt="..."
                        className="info-card-image card-img card-img-top"
                        src={this.props.attr.image}
                    />
                    <CardBody>
                        <CardTitle tag="h4">{this.props.attr.title}</CardTitle>
                        <CardText className={'text-wrapper'}>
                            {this.props.attr.text.substring(0,90) + '...'}
                        </CardText>
                        <Button
                            //color="#437336"
                            //href="?id=" + {this.props.attr.number}
                            onClick={(e) => this.showCardDetails(e)}
                            style={{backgroundColor:'#437336'}}
                        >
                            + Info
                        </Button>
                    </CardBody>
                </Card>
            </div>
        )
    }



};

export { CustomCard }
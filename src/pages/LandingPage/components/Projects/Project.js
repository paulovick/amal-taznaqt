import React, { useState } from 'react'
import {Button, Col, Container, Row} from "reactstrap"
import { Redirect } from "react-router"
import './Project.scss'

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.state = {
      redirect: false,
    }

  }

  handleOnButtonClick = () => {
    this.setState({redirect: true})
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/register"/>
    }

    return (
        <Col md="4">
          <div className="team-player">
            <img
                alt="..."
                className="rounded-circle img-fluid img-raised image-project"
                src={this.props.attr.img}
            />
            <h4 className="title">{this.props.attr.projectName}</h4>
            <p className="description">{this.props.attr.text}</p>
            <Button style={{color:'#437336'}} outline={true} size="lg" onClick={this.handleOnButtonClick}>Regístrame!</Button>
          </div>
        </Col>
    )
  }

};

export { Project }




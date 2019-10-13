import React, { useState } from 'react'
import { Button, Col, Row, Container } from "reactstrap"
import { Redirect } from "react-router"
import './Volunteer.scss'

const Volunteer = ({ volunteerName, volunteerCity, volunteerImg, history}) => {

    const handleOnButtonClick = () => {
        history.push({pathname: '/profile', attr:{volunteerName, volunteerCity, volunteerImg, history}})
    }



    return (


            <Col md="3" className="volunteer">
                <div className="photo-container">
                    <img alt="..." src={volunteerImg} className="photo rounded-circle img-fluid img-raised" />
                </div>
                <h4 className="title" style={{height: 100}}>{volunteerName}</h4>
                <p className="category">{volunteerCity}</p>



    <Button style={{color:'#437336'}} outline={true} size="lg" onClick={handleOnButtonClick}>Ver perfil!</Button>

    </Col>
)
}

export { Volunteer }

import React, { useState } from 'react'
import { Button, Col, Row, Container } from "reactstrap"
import { Redirect } from "react-router"
import './Volunteer.scss'

const Volunteer = ({ volunteerName, volunteerCity }) => {
    const [redirect, setRedirect] = useState(false)

    const handleOnButtonClick = () => {
        setRedirect(true)
    }

    if (redirect)
        return <Redirect to="/profile" />

    return (
        <div className = "volunteer">

            <Container>
            <Row>
            <Col md="4">
                <div className="photo-container">
                    <img alt="..." src={require("assets/img/ryan.jpg")} className="photo rounded-circle img-fluid img-raised" />
                </div>
                <h3 className="title">{volunteerName}</h3>
                <p className="category">{volunteerCity}</p>
            </Col>
            </Row>
            </Container>

    <Button color="info" outline={true} size="lg" onClick={handleOnButtonClick}>Ver perfil!</Button>
    </div>

)
}

export { Volunteer }

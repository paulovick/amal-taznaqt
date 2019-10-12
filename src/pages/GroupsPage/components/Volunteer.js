import React, { useState } from 'react'
import { Button, Col, Row, Container } from "reactstrap"
import { Redirect } from "react-router"
import './Volunteer.scss'

const Volunteer = ({ volunteerName, volunteerCity, volunteerImg }) => {
    const [redirect, setRedirect] = useState(false)

    const handleOnButtonClick = () => {
        setRedirect(true)
    }

    if (redirect)
        return <Redirect to="/profile" />

    return (


            <Col md="3" className="volunteer">
                <div className="photo-container">
                    <img alt="..." src={volunteerImg} className="photo rounded-circle img-fluid img-raised" />
                </div>
                <h4 className="title">{volunteerName}</h4>
                <p className="category">{volunteerCity}</p>



    <Button color="info" outline={true} size="lg" onClick={handleOnButtonClick}>Ver perfil!</Button>

    </Col>
)
}

export { Volunteer }

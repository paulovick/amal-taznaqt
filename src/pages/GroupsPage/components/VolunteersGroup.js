import React from 'react'
import { Container, Row } from "reactstrap"
import { Volunteer } from './Volunteer'

const VolunteersGroup = () => {
    return (
        <div className="section section-team text-center">
        <Container>
        <h2 className="title">"Voluntarios en Barcelona"</h2>
        <div className="team">
        <Row>
        <Volunteer volunteerName="Claudia Lopez Vila" volunteerCity="Barcelona"/>
        <Volunteer volunteerName="Gisela Ruzafa Amado" volunteerCity="Barcelona"/>
        <Volunteer volunteerName="Pau Torrents Gallego" volunteerCity="Barcelona"/>

        </Row>
        </div>
        </Container>
        </div>
)
}

export { VolunteersGroup }
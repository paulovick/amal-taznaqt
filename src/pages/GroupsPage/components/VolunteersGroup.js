import React from 'react'
import { Container, Row } from "reactstrap"
import { Volunteer } from './Volunteer'

const VolunteersGroup = (props) => {
    return (
        <div className="section section-team text-center">
        <Container>
        <h2 className="title">Voluntarios en Barcelona</h2>
        <div className="team">
        <Row>
        <Volunteer volunteerName="Claudia Sheen Vila" volunteerCity="Barcelona" volunteerImg={require("assets/img/claudia.jpg")} history={props.history}/>
        <Volunteer volunteerName="Gisela Monrroe Amado" volunteerCity="Barcelona" volunteerImg={require("assets/img/gisela.png")} history={props.history} />
        <Volunteer volunteerName="Pau Trumbo Gallego" volunteerCity="Barcelona" volunteerImg={require("assets/img/pau.png")} history={props.history}/>
        <Volunteer volunteerName="Andreu Puig Derivera" volunteerCity="Barcelona" volunteerImg={require("assets/img/andres.jpeg")} history={props.history}/>
        <Volunteer volunteerName="Pere Gil Verde" volunteerCity="Barcelona" volunteerImg={require("assets/img/josep.png")} history={props.history}/>

        </Row>

        </div>

        <h2 className="title">Voluntarios en Madrid</h2>
         <div className="team">
        <Row>
        <Volunteer volunteerName="Marcos Jose Perez Pintatostas" volunteerCity="Barcelona" volunteerImg={require("assets/img/finde.png")} history={props.history}/>
        <Volunteer volunteerName="Omar Buenestado Fernandez " volunteerCity="Barcelona" volunteerImg={require("assets/img/omar.jpeg")} history={props.history}/>
        <Volunteer volunteerName="Sejo Reeves Viña " volunteerCity="Barcelona" volunteerImg={require("assets/img/Sejo.jpeg")} history={props.history}/>
        <Volunteer volunteerName="Rocío Jurado Ramon " volunteerCity="Barcelona" volunteerImg={require("assets/img/borja.jpeg")} history={props.history}/>


        </Row>
        </div>

    <h2 className="title">Voluntarios en Galicia</h2>
    <div className="team">
        <Row>

    <Volunteer volunteerName="Pablo Ourense Ortigue " volunteerCity="Barcelona" volunteerImg={require("assets/img/pablito.png")} history={props.history}/>
    <Volunteer volunteerName="Coyote Pollo Arroz " volunteerCity="Barcelona" volunteerImg={require("assets/img/sergio.png")} history={props.history}/>
    <Volunteer volunteerName="Mario Conejo Malo " volunteerCity="Barcelona" volunteerImg={require("assets/img/mario.jpeg")} history={props.history}/>

    </Row>
    </div>
    <h2 className="title">Voluntarios en Zaragoza</h2>
    <div className="team">
        <Row>

    <Volunteer volunteerName="Alex Catalan España " volunteerCity="Barcelona" volunteerImg={require("assets/img/alex.jpeg")} history={props.history}/>
    <Volunteer volunteerName="Juaquina Feliz Carm " volunteerCity="Barcelona" volunteerImg={require("assets/img/gina.jpeg")} history={props.history}/>
    <Volunteer volunteerName="Clavelito de Corazón " volunteerCity="Barcelona" volunteerImg={require("assets/img/tomas.jpeg")} history={props.history}/>

    </Row>
    </div>

    <h2 className="title">Voluntarios en Sevilla</h2>
    <div className="team">
        <Row>


    <Volunteer volunteerName="Ulises Excalibur Cid " volunteerCity="Barcelona" volunteerImg={require("assets/img/cid.jpeg")} history={props.history}/>
    <Volunteer volunteerName="Juan Ramón Dellafuen" volunteerCity="Barcelona" volunteerImg={require("assets/img/juan.jpeg")} history={props.history}/>
    <Volunteer volunteerName="Gonzalo Lil Pum Pum " volunteerCity="Barcelona" volunteerImg={require("assets/img/gonzalo.jpeg")} history={props.history}/>

    </Row>
    </div>


        </Container>
        </div>
)
}

export { VolunteersGroup }
import React from 'react'
import { Container, Row } from "reactstrap"
import { Project } from './Project'

const Projects = () => {
  return (
    <div className="section section-team text-center">
      <Container>
        <h2 className="title">Proyectos</h2>
        <div className="team">
          <Row>
            <Project projectName="Proyecto de primavera" />
            <Project projectName="Proyecto de verano" />
            <Project projectName="Proyecto de invierno" />
          </Row>
        </div>
      </Container>
    </div>
  )
}

export { Projects }

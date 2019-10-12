import React from 'react'
import { Container, Row } from "reactstrap"
import { Project } from './Project'


class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.state = {
    }

  }

  render() {
    return (
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Proyectos</h2>
            <div className="team">
              <Row>
                <Project attr={{img:require('assets/img/stSanta.png'), text:'Del 12/04 al 22/04', projectName:'Proyecto de primavera'}} />
                <Project attr={{img:require('assets/img/verano.jpg'), text:'Del 27/07 al 10/08', projectName:'Proyecto de verano'}} />
                <Project attr={{img:require('assets/img/navidad_720.jpg'), text:'Del 25/12 al 06/01', projectName:'Proyecto de invierno'}} />
              </Row>
            </div>
          </Container>
        </div>
    )
  }

};

export { Projects }

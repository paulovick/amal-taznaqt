import React from 'react'
import { Col, Container, Row } from "reactstrap"
import './AboutUs.scss'

const AboutUs = () => {
  return (
    <div className="section section-about-us">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">Quien somos?</h2>
            <h5 className="description">
              La asociación Amal Taznaqt es una organización sin ánimo de lucro afincada en Taznaqt, pueblo cercano a la ciudad de Errachidia, situada al sudeste de Marruecos. El nombre de la asociación, Amal, significa en árabe esperanza. Con ello queremos transmitir nuestra idea de solidaridad con los más necesitados siendo nuestro propósito promover su desarrollo personal a través de la educación y la mejora de las condiciones de vida. Así queremos que sepan que junto con la esperanza, la ayuda de los demás y su propio esfuerzo, pueden avanzar poco a poco y mirar hacia un futuro mejor.
            </h5>
          </Col>
        </Row>
        <div className="separator separator-primary" />
        <div className="section-story-overview">
          <Row>
            <Col md="6">
              <div
                className="image-container image-left"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/landing-detail-1.jpg") + ")",
                    borderColor: '#437336'
                }}
              >
                <p style={{color:'#437336'}} className="blockquote blockquote-info comment-container">
                  "Ha sido una experiencia increíble, era mi primer voluntariado y estoy segura que no sera el último. He disfrutado con los niños y las niñas, he conocido diferentes maneras de vivir, he visitado la zona y los alrededores, una auténtica pasada. Emocionalmente me ha llenado al completo." <br></br>
                  <br></br>
                  <small style={{color:'#437336'}}>-Voluntario anonimo</small>
                </p>
              </div>
              <div
                className="image-container"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/landing-detail-3.jpg") + ")",
                    marginTop: '700px',
                }}
              />
            </Col>
            <Col md="5">
              <div
                className="image-container image-right"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/landing-detail-2.jpg") + ")"
                }}
              />
              <h3>
                Los principales objetivos de la asociación son:
              </h3>
              <p>
                –  Atender la pobreza y la falta de recursos de la población de la zona, en la medida que nos sea posible,  proporcionando bienes materiales básicos para los habitantes del pueblo, tales como ropa, material didáctico, juguetes, etc.
              </p>
              <p>
                –  Programar acciones solidarias para conseguir mejoras en el ámbito de la salud de sus habitantes y la construcción de infraestructuras en el pueblo.
              </p>
              <p>
                –  Favorecer y promover intercambios culturales entre los voluntarios, coordinadores y la población, desde el respeto y el aprendizaje, para conocer la cultura y tradiciones, y desarrollar compromisos personales en actividades colaborativas.
              </p>
              <p>
                –  Elaborar proyectos culturales y sociales en colaboración con otros organismos y asociaciones para la ayuda y mejora de la población.
              </p>
              <p>
                –  Elaborar proyectos educativos y actividades lucrativas-culturales para la mejora del desarrollo de los niños.
              </p>
              <p>
                –  Desarrollar compromisos personales y sociales mediante la realización de actividades en grupo entre niños y adultos o entre adultos de diferentes procedencias con pensamientos muy dispares para lograr una superación personal por parte de todos los individuos.
              </p>

            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export { AboutUs }

import React from 'react'
import { Col, Container, Row } from "reactstrap"

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
                    "url(" + require("assets/img/login.jpg") + ")"
                }}
              >
                <p className="blockquote blockquote-info">
                  "Over the span of the satellite record, Arctic sea ice has
                  been declining significantly, while sea ice in the
                  Antarctichas increased very slightly" <br></br>
                  <br></br>
                  <small>-NOAA</small>
                </p>
              </div>
              <div
                className="image-container"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/bg3.jpg") + ")"
                }}
              />
            </Col>
            <Col md="5">
              <div
                className="image-container image-right"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/bg1.jpg") + ")"
                }}
              />
              <h3>
                So what does the new record for the lowest level of winter
                ice actually mean
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros dolor, blandit quis aliquam vitae, commodo ac massa. Quisque scelerisque consequat tempus. Nunc non justo dignissim, fermentum elit ut, vestibulum ipsum. Etiam et commodo nisi, vitae rutrum nunc. Proin facilisis ligula eu nunc sodales, et feugiat ante cursus. Aliquam consectetur ante non elit consequat, ac dictum tellus consequat. Sed vitae nulla laoreet, tempus arcu id, elementum metus. Donec ac efficitur sapien. Praesent arcu dolor, efficitur quis sapien vitae, dapibus rhoncus felis. Nam ut lacus vitae ante consectetur viverra. Proin eget euismod metus. Vestibulum laoreet, sem at vestibulum fermentum, sem lorem vehicula ex, eget commodo ipsum risus maximus arcu. Ut convallis suscipit turpis sit amet laoreet. Cras orci leo, gravida ut accumsan a, aliquam eget felis.
              </p>
              <p>
                Phasellus faucibus ante non libero scelerisque, id posuere odio finibus. Maecenas tristique a turpis in tristique. Phasellus augue dolor, porttitor in cursus vel, consectetur at est. Maecenas venenatis mi sit amet fermentum mollis. Vivamus non purus sed velit facilisis lobortis. Phasellus et facilisis sem. Quisque tristique volutpat dictum. Nulla egestas magna et diam scelerisque fermentum.
              </p>
              <p>
                Etiam tincidunt cursus tincidunt. Mauris ut augue nisi. Aliquam porttitor justo sit amet velit volutpat viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non urna consequat, rutrum urna at, ultrices ante. Nam et efficitur erat. Curabitur in blandit mauris, sed dapibus nisl. Integer egestas ligula porta, egestas augue finibus, tincidunt ex. Duis consequat enim et lorem facilisis, rhoncus commodo diam mollis. Donec blandit felis commodo, rutrum ligula at, suscipit felis. Nunc nec orci vitae lorem mattis faucibus sed eu purus. Phasellus convallis aliquam risus vel sollicitudin. Maecenas at tempor tortor, at egestas sem.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export { AboutUs }

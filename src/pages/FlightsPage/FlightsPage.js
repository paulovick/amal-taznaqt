import React, { Component } from 'react'
import { fetchFlights } from "../../services/skyscanner"
import { Flight } from "./Flight/Flight"
import { Col, Container, Row } from "reactstrap"

class FlightsPage extends Component {
  state = {
    flights: null
  }

  async componentDidMount() {
    const flights = await fetchFlights('BCN-sky', 'MA-sky', '2019-12')
    this.setState({ flights })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">Vuelos</h2>
          </Col>
        </Row>
        {this.state.flights && this.state.flights.map(flight =>
          <Flight {...flight} />
        )}
      </Container>
    )
  }
}

export { FlightsPage }

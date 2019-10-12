import React, { Component } from 'react'
import { fetchFlights } from "../../services/skyscanner"
import { Flight } from "./Flight/Flight"
import { Col, Container, Row } from "reactstrap"

class FlightsPage extends Component {
  state = {
    outboundFlights: [],
    returnFlights: []
  }

  componentDidMount() {
    fetchFlights('BCN-sky', 'MA-sky', '2019-11')
      .then(outboundFlights => {
        this.setState({ outboundFlights })
      })
    fetchFlights('MA-sky', 'BCN-sky', '2019-11')
      .then(returnFlights => {
        this.setState({ returnFlights })
      })
  }

  getCheapestFlight = (flights) => {
    return flights.sort(
      (x, y) => x.minimumPrice < y.minimumPrice ? -1 :
        x.minimumPrice === y.minimumPrice ? 0 : 1
    )[0]
  }

  render() {
    const cheapestOutboundFlight = this.getCheapestFlight(this.state.outboundFlights)
    const cheapestReturnFlight = this.getCheapestFlight(this.state.returnFlights)

    return (
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">Vuelos</h2>
          </Col>
        </Row>

        <h3>Ida y vuelta más baratos</h3>
        {cheapestOutboundFlight && !cheapestReturnFlight &&
          <Flight outboundFlight={cheapestOutboundFlight} />
        }
        {cheapestOutboundFlight && cheapestReturnFlight &&
          <Flight outboundFlight={cheapestOutboundFlight} returnFlight={cheapestReturnFlight}/>
        }
        {!cheapestOutboundFlight && cheapestReturnFlight &&
          <Flight outboundFlight={cheapestReturnFlight} />
        }
      </Container>
    )
  }
}

export { FlightsPage }

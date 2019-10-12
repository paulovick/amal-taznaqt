import React, { Component } from 'react'
import { fetchFlights } from "../../services/skyscanner"
import { Flight } from "./Flight/Flight"
import { Col, Container, Row } from "reactstrap"

import "./FlightsPage.scss"
import { FlightsTable } from "./FlightsTable/FlightsTable"

class FlightsPage extends Component {
  state = {
    outboundDays: ["2019-11-10", "2019-11-11", "2019-11-12", "2019-11-13", "2019-11-14", "2019-11-15"],
    outboundFlights: [],
    returnDays: ["2019-11-28", "2019-11-29", "2019-11-30", "2019-12-01", "2019-12-02", "2019-12-03"],
    returnFlights: []
  }

  componentDidMount() {
    fetchFlights('BCN-sky', 'MA-sky', this.state.outboundDays)
      .then(outboundFlights => {
        this.setState({ outboundFlights })
      })
    fetchFlights('MA-sky', 'BCN-sky', this.state.returnDays)
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
      <Container className="flights-page">
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

        <h3>Vuelos de ida</h3>
        <FlightsTable tableKey="outbound-flights" days={this.state.outboundDays} flights={this.state.outboundFlights} />

        <h3>Vuelos de vuelta</h3>
        <FlightsTable tableKey="return-flights" days={this.state.returnDays} flights={this.state.returnFlights} />

      </Container>
    )
  }
}

export { FlightsPage }

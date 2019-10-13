import React, { Component } from 'react'
import { fetchFlights } from "../../services/skyscanner"
import { Flight } from "./Flight/Flight"
import { Col, Container, Form, FormGroup, Input, Row } from "reactstrap"

import "./FlightsPage.scss"
import { FlightsTable } from "./FlightsTable/FlightsTable"
import Datetime from "react-datetime"

class FlightsPage extends Component {
  state = {
    origin: { id: 'BCN-sky', label: 'Barcelona - El Prat' },
    outboundDays: ["2019-11-10", "2019-11-11", "2019-11-12", "2019-11-13", "2019-11-14", "2019-11-15"],
    outboundFlights: [],
    returnDays: ["2019-11-28", "2019-11-29", "2019-11-30", "2019-12-01"],
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

        <Form className="form-flights">
          <FormGroup>
            <label htmlFor="originSelect" className="outbound-from-label">Salida des de</label>
            <Input id="originSelect" type="select" className="origin-airport-select">
              <option value="BCN-sky">Barcelona - El Prat</option>
              <option value="MAD-sky">Madrid - Barajas</option>
            </Input>
          </FormGroup>
          <div className="dates-container">
            <FormGroup className="dates-period-container">
              <label htmlFor="outboundStartDate">Selecciona un rango de fechas para la salida</label>
              <div className="flights-page-dates">
                <Datetime
                  id="outboundStartDate"
                  className="flights-page-datepicker"
                  timeFormat={false}
                />
                <Datetime
                  id="outboundEndDate"
                  className="flights-page-datepicker"
                  timeFormat={false}
                />
              </div>
            </FormGroup>
            <FormGroup className="dates-period-container">
              <label htmlFor="returnStartDate">Selecciona un rango de fechas para la salida</label>
              <div className="flights-page-dates">
                <Datetime
                  id="returnStartDate"
                  className="flights-page-datepicker"
                  timeFormat={false}
                />
                <Datetime
                  id="returnEndDate"
                  className="flights-page-datepicker"
                  timeFormat={false}
                />
              </div>
            </FormGroup>
          </div>
        </Form>

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

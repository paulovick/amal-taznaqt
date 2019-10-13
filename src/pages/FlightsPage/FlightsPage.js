import React, { Component } from 'react'
import { fetchFlights } from "../../services/skyscanner"
import { Flight } from "./Flight/Flight"
import { Col, Container, Form, FormGroup, Input, Row } from "reactstrap"

import "./FlightsPage.scss"
import { FlightsTable } from "./FlightsTable/FlightsTable"
import Datetime from "react-datetime"
import LandingPageHeader from "../LandingPage/components/LandingPageHeader/LandingPageHeader"
import moment from "moment"

class FlightsPage extends Component {
  state = {
    origin: 'BCN-sky',
    outboundStartDay: moment().add(1, 'days').format("YYYY-MM-DD"),
    outboundEndDay: moment().add(6, 'days').format("YYYY-MM-DD"),
    outboundFlights: [],
    returnStartDay: moment().add(8, 'days').format("YYYY-MM-DD"),
    returnEndDay: moment().add(14, 'days').format("YYYY-MM-DD"),
    returnFlights: []
  }

  componentDidMount() {
    this.updateResults({})
  }

  resetResults = () => {
    this.setState({
      outboundFlights: [],
      returnFlights: []
    })
  }

  updateResults = ({
    origin = this.state.origin,
    outboundStartDay = this.state.outboundStartDay,
    outboundEndDay = this.state.outboundEndDay,
    returnStartDay = this.state.returnStartDay,
    returnEndDay = this.state.returnEndDay
  }) => {
    this.setState({
      origin,
      outboundStartDay,
      outboundEndDay,
      returnStartDay,
      returnEndDay
    })

    console.log(`updating (${outboundStartDay}, ${outboundEndDay}, ` +
      `${returnStartDay}, ${returnEndDay}`)

    const outboundDays = this.calculateDayRange(outboundStartDay, outboundEndDay)
    const returnDays = this.calculateDayRange(returnStartDay, returnEndDay)

    fetchFlights(origin, 'MA-sky', outboundDays)
      .then(outboundFlights => {
        this.setState({ outboundFlights })
      })
    fetchFlights('MA-sky', origin, returnDays)
      .then(returnFlights => {
        this.setState({ returnFlights })
    })
  }

  handleOnOriginChange = (newOrigin) => {
    this.resetResults()
    this.updateResults({ origin: newOrigin })
  }

  handleOnDateChange = (property, newValue) => {
    const value = moment(newValue).format("YYYY-MM-DD")
    console.log('setting ' + property + ' with value ' + value)
    this.updateResults({
      [property]: value
    })
  }

  getCheapestFlight = (flights) => {
    return flights.sort(
      (x, y) => x.minimumPrice < y.minimumPrice ? -1 :
        x.minimumPrice === y.minimumPrice ? 0 : 1
    )[0]
  }

  calculateDayRange = (startDateStr, endDateStr) => {
    if (!startDateStr || !endDateStr) return []

    const startDate = new Date(startDateStr)
    const endDate = new Date(endDateStr)

    let dates = [],
      currentDate = startDate,
      addDays = function(days) {
        let date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      };
    while (currentDate <= endDate) {
      dates.push(currentDate);
      currentDate = addDays.call(currentDate, 1);
    }
    return dates.map(date => moment(date).format("YYYY-MM-DD"));
  }

  render() {
    const outboundDays = this.calculateDayRange(this.state.outboundStartDay, this.state.outboundEndDay)
    const returnDays = this.calculateDayRange(this.state.returnStartDay, this.state.returnEndDay)

    const cheapestOutboundFlight = this.getCheapestFlight(this.state.outboundFlights)
    const cheapestReturnFlight = this.getCheapestFlight(this.state.returnFlights)

    return (
      <>
        <LandingPageHeader {...this.props}/>
        <Container className="flights-page">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Vuelos</h2>
            </Col>
          </Row>

          <Form className="form-flights">
            <FormGroup>
              <label htmlFor="originSelect" className="outbound-from-label">Salida des de</label>
              <Input
                id="originSelect"
                type="select"
                className="origin-airport-select"
                onChange={e => this.handleOnOriginChange(e.target.value)}
                value={this.state.origin}
              >
                <option value="BCN-sky">Barcelona - El Prat</option>
                <option value="MAD-sky">Madrid - Barajas</option>
                <option value="VLC-sky">Valencia - Manises</option>
                <option value="SVQ-sky">Sevilla</option>
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
                    value={this.state.outboundStartDay}
                    onChange={newDate => this.handleOnDateChange('outboundStartDate', newDate)}
                  />
                  <Datetime
                    id="outboundEndDate"
                    className="flights-page-datepicker"
                    timeFormat={false}
                    value={this.state.outboundEndDay}
                    onChange={newDate => this.handleOnDateChange('outboundEndDate', newDate)}
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
                    value={this.state.returnStartDay}
                    onChange={newDate => this.handleOnDateChange('returnStartDate', newDate)}
                  />
                  <Datetime
                    id="returnEndDate"
                    className="flights-page-datepicker"
                    timeFormat={false}
                    value={this.state.returnEndDay}
                    onChange={newDate => this.handleOnDateChange('returnEndDate', newDate)}
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
          {outboundDays && outboundDays.length &&
            <FlightsTable tableKey="outbound-flights" days={outboundDays} flights={this.state.outboundFlights}/>
          }

          <h3>Vuelos de vuelta</h3>
          {returnDays && returnDays.length &&
            <FlightsTable tableKey="return-flights" days={returnDays} flights={this.state.returnFlights}/>
          }

        </Container>
      </>
    )
  }
}

export { FlightsPage }

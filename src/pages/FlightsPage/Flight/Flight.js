import React from 'react'
import { Card, CardBody } from "reactstrap"

import './Flight.scss'
import { FlightAirport } from "../FlightAirport/FlightAirport"
import Moment from "react-moment"
import { AirlineLogo } from "../AirlineLogo/AirlineLogo"

const SingleFlightDetail = ({
  origin,
  destination,
  minimumPrice,
  departureDate,
  carrier
}) => {
  return (
    <div className="flight">
      <div className="flight-details">
        <div>
          <FlightAirport {...origin} />
          <div className="flight-route-separator">-</div>
          <FlightAirport {...destination} />
        </div>
        <div className="flight-date-time">
          {departureDate &&
          <>
            <span>
              <Moment format="DD MMM YYYY" locale="es">{departureDate}</Moment>
            </span>
            <span>
              <Moment format="hh:mm" locale="es">{departureDate}</Moment>
            </span>
          </>
          }
        </div>
      </div>
      <div className="flight-carriers">
        <AirlineLogo airline={carrier.Name} />
      </div>
      <div className="flight-price">
        <div>
          {minimumPrice.toFixed(2)} €
        </div>
        <div className="flight-min-price-label">Precio mínimo</div>
      </div>
    </div>
  )
}

const Flight = ({ outboundFlight, returnFlight }) => {
  return (
    <Card>
      <CardBody>
        <SingleFlightDetail {...outboundFlight} />
        {returnFlight &&
          <>
            <div className="flights-separator" />
            <SingleFlightDetail {...returnFlight} />
          </>
        }
      </CardBody>
    </Card>
  )
}

export { Flight }

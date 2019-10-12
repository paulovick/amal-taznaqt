import React from 'react'
import { Card, CardBody } from "reactstrap"

import './Flight.scss'
import { FlightAirport } from "../FlightAirport/FlightAirport"

const Flight = ({
  origin,
  destination,
  minimumPrice
}) => {
  return (
    <Card>
      <CardBody className="flight">
        <div className="flight-route">
          <FlightAirport {...origin} />
          <div className="flight-route-separator">-</div>
          <FlightAirport {...destination} />
        </div>
        <div className="flight-price">
          {minimumPrice &&
          <>{minimumPrice.toFixed(2)} €</>
          }
        </div>
      </CardBody>
    </Card>
  )
}

export { Flight }

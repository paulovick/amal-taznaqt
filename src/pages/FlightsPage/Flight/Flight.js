import React from 'react'
import { Card, CardBody } from "reactstrap"

import './Flight.scss'
import { FlightAirport } from "../FlightAirport/FlightAirport"

const Flight = ({
  origin,
  destination,
  minimumPrice,
  departureDate,
  carriers
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
          <>
            <div>
              {minimumPrice.toFixed(2)} €
            </div>
            <div className="flight-min-price-label">Precio mínimo</div>
          </>
          }
        </div>
      </CardBody>
    </Card>
  )
}

export { Flight }

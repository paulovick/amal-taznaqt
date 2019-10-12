import React from 'react'

import './FlightAirport.scss'

const FlightAirport = ({
  IataCode,
  Name
}) => {
  return (
    <div className="flight-airport">
      <div className="flight-airport-iata">{IataCode}</div>
      <div className="flight-airport-name">{Name}</div>
    </div>
  )
}

export { FlightAirport }

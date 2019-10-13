import React from 'react'
import moment from "moment"

const AirlineDayCell = ({flights}) => {
  return (
    <div className={`airline-cell ${flights.length === 0 ? 'empty' : ''}`}>
      {flights.map(flight => {
        return (
          <div
            key={`airline-cell-flight_${flight.origin.IataCode}-${flight.destination.IataCode}-${flight.departureDate}`}
            className="airline-cell-flight"
          >
            <div className="airline-cell-flight-left">
              <div>{flight.origin.IataCode}-{flight.destination.IataCode}</div>
              <div>{moment(flight.departureDate).format("hh:mm")}</div>
            </div>
            <div className="price">{flight.minimumPrice} €</div>
          </div>
        )
      })}
    </div>
  )
}

export { AirlineDayCell }

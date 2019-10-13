import React from 'react'

const AirlineDayCell = ({flights}) => {
  return (
    <div className="day">
      {flights.map(flight => {
        return (
          <div
            key={`airline-day-cell_${flight.origin.IataCode}-${flight.destination.IataCode}-${flight.departureDate}`}
          >{flight.origin.IataCode}</div>
        )
      })}
    </div>
  )
}

export { AirlineDayCell }

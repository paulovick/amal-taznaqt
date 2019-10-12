import React from 'react'
import { Card } from "reactstrap"
import { AirlineLogo } from "../AirlineLogo/AirlineLogo"
import Moment from "react-moment"

import './FlightsTable.scss'

const getUniqueAirlines = (flights) => {
  let result = []

  for(let i = 0; i < flights.length; i++) {
    const flight = flights[i]

    if (result.filter(carrier => carrier.CarrierId === flight.carrier.CarrierId).length === 0) {
      result.push(flight.carrier)
    }
  }

  return result
}

const FlightsTable = ({ tableKey, days, flights }) => {
  const airlines = getUniqueAirlines(flights)
  console.log(airlines)

  return (
    <Card className="flights-table">
      <div className="table-header">
        <div className="header-airport">
          Aeropuerto
        </div>
        { days.map(day => (
          <div key={`${tableKey}_day_${day}`} className="header-day">
            <Moment format="DD MMM">{day}</Moment>
          </div>
        ))}
      </div>

      <div className="table-content">
        {airlines.map(airline => (
          <div key={`${tableKey}_carrier_${airline.CarrierId}`} className="airline-row">
            <div className="airline">
              <AirlineLogo airline={airline.Name} />
            </div>
            {days.map(day => (
              <div key={`${tableKey}_carrier_${airline.CarrierId}_day_${day}`} className="day">
                Flight
              </div>
            ))}
          </div>
        ))}
      </div>
    </Card>
  )
}

export { FlightsTable }

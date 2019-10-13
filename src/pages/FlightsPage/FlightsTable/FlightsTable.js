import React from 'react'
import { Card } from "reactstrap"
import { AirlineLogo } from "../AirlineLogo/AirlineLogo"
import Moment from "react-moment"

import './FlightsTable.scss'
import { AirlineDayCell } from "../AirlineDayCell/AirlineDayCell"
import moment from "moment"

const getUniqueAirlines = (dateRange, flights) => {
  let result = []

  for(let i = 0; i < flights.length; i++) {
    const flight = flights[i]

    if (result.filter(carrier => carrier.CarrierId === flight.carrier.CarrierId).length === 0 &&
      getFlightsForAirlineAndRange(flight.carrier, dateRange, flights).length !== 0
    ) {
      result.push(flight.carrier)
    }
  }

  return result
}

const getFlightsForAirlineAndRange = (airline, dayRange, flights) => {
  const dayRangeFormatted = dayRange.map(day => moment(day).format("DD MMM"))
  return flights.filter(flight => {
    return flight.carrier.CarrierId === airline.CarrierId &&
      dayRangeFormatted.indexOf(moment(flight.departureDate).format("DD MMM")) !== -1
  })
}

const getFlightsForAirlineAndDay = (airline, day, flights) => {
  return getFlightsForAirlineAndRange(airline, [day], flights)
}

const FlightsTable = ({ tableKey, days, flights }) => {
  const airlines = getUniqueAirlines(days, flights)
  console.log(airlines)

  return (
    <Card className="flights-table">
      <div className="table-header">
        <div className="header-airline">
          Aerolínia
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
              <AirlineDayCell
                key={`${tableKey}_carrier_${airline.CarrierId}_day_${day}`}
                flights={getFlightsForAirlineAndDay(airline, day, flights)}
              />
            ))}
          </div>
        ))}
      </div>
    </Card>
  )
}

export { FlightsTable }

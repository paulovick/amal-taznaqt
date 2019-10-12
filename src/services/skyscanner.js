import axios from 'axios'
import moment from "moment"

const getQuoteById = (quoteId, responseData) => {
  return responseData.Quotes.filter(quote => quote.QuoteId === quoteId)[0]
}

const parsePlace = (placeId, responseData) => {
  const place = responseData.Places.filter(place => place.PlaceId === placeId)[0]
  return place
}

const parseDepartureDate = (quoteId, responseData) => {
  const quote = getQuoteById(quoteId, responseData)

  return new Date(quote.OutboundLeg.DepartureDate)
}

const parseMinPrice = (quoteId, responseData) => {
  const quote = getQuoteById(quoteId, responseData)
  return quote.MinPrice
}

const parseCarrier = (quoteId, responseData) => {
  const quote = getQuoteById(quoteId, responseData)

  const carrier = responseData.Carriers.filter(carrier =>
    quote.OutboundLeg.CarrierIds.indexOf(carrier.CarrierId) !== -1)[0]
  return carrier
}

const parseFlight = (flight, responseData) => {
  const result = {
    origin: parsePlace(flight.OriginId, responseData),
    destination: parsePlace(flight.DestinationId, responseData),
    minimumPrice: parseMinPrice(flight.QuoteId, responseData),
    departureDate: parseDepartureDate(flight.QuoteId, responseData),
    carrier: parseCarrier(flight.QuoteId, responseData)
  }

  return result
}

const createFlightsFromRoute = (route) => {
  if (!route.QuoteIds) return null

  return route.QuoteIds.map(quoteId => {
    let routeModified = { ...route }
    delete routeModified["QuoteIds"]
    return { ...route, QuoteId: quoteId }
  })
}

const fetchFlightsForSpecificMonth = async (from, to, month) => {
  const response = await axios.get(
    `https://www.skyscanner.net/g/chiron/api/v1/flights/browse/browseroutes/` +
    `v1.0/ES/EUR/es-ES/${from}/${to}/${month}`,
    {
      headers: {
        'api-key': 'skyscanner-hackupc2019'
      }
    }
  )

  if (response.status === 200) {
    const responseData = response.data

    const flightsData = responseData.Routes.map(route =>
      createFlightsFromRoute(route)
    ).filter(flights => flights !== null).flat()

    const flights = flightsData.map(flight => parseFlight(flight, responseData))
    return flights
  }
}

const getMonthsForDates = (days) => {
  let result = []

  for(let i = 0; i < days.length; i++) {
    const month = moment(days[i]).format("YYYY-MM")
    if (result.indexOf(month) === -1) result.push(month)
  }

  return result
}

const fetchFlights = async (from, to, departureDates) => {
  let result = []

  const months = getMonthsForDates(departureDates)
  for(let i = 0; i < months.length; i++) {
    const flights = await fetchFlightsForSpecificMonth(from, to, months[i])
    result = [...result, ...flights]
  }

  return result
}

export { fetchFlights }

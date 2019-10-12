import axios from 'axios'

const getQuoteById = (quoteId, responseData) => {
  return responseData.Quotes.filter(quote => quote.QuoteId === quoteId)[0]
}

const parsePlace = (placeId, responseData) => {
  const place = responseData.Places.filter(place => place.PlaceId === placeId)[0]
  return place
}

const parseDepartureDate = (quoteId, responseData) => {
  if (!quoteId) return null

  const quote = getQuoteById(quoteId, responseData)

  return new Date(quote.OutboundLeg.DepartureDate)
}

const parseMinPrice = (quoteId, responseData) => {
  if (!quoteId) return null

  const quote = getQuoteById(quoteId, responseData)
  return quote.MinPrice
}

const parseCarriers = (quoteId, responseData) => {
  if (!quoteId) return null

  const quote = getQuoteById(quoteId, responseData)

  const carriers = responseData.Carriers.filter(carrier =>
    quote.OutboundLeg.CarrierIds.indexOf(carrier.CarrierId) !== -1)
  return carriers
}

const parseFlight = (flight, responseData) => {
  const result = {
    origin: parsePlace(flight.OriginId, responseData),
    destination: parsePlace(flight.DestinationId, responseData),
    minimumPrice: parseMinPrice(flight.QuoteId, responseData),
    departureDate: parseDepartureDate(flight.QuoteId, responseData),
    carriers: parseCarriers(flight.QuoteId, responseData)
  }

  return result
}

const createFlightsFromRoute = (route) => {
  if (!route.QuoteIds) return [route]

  return route.QuoteIds.map(quoteId => {
    let routeModified = { ...route }
    delete routeModified["QuoteIds"]
    return { ...route, QuoteId: quoteId }
  })
}

const fetchFlights = async (from, to, departureDate) => {
  const response = await axios.get(
    `https://www.skyscanner.net/g/chiron/api/v1/flights/browse/browseroutes/` +
    `v1.0/ES/EUR/es-ES/${from}/${to}/${departureDate}`,
    {
      headers: {
        'api-key': 'skyscanner-hackupc2019'
      }
    }
  )

  if (response.status === 200) {
    const responseData = response.data

    const flightsData = responseData.Routes.map(route => createFlightsFromRoute(route)).flat()
    console.log(flightsData)

    const flights = flightsData.map(flight => parseFlight(flight, responseData))
    return flights
  }
}

export { fetchFlights }

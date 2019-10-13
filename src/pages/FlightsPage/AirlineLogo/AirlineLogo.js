import React from 'react'

import VuelingLogo from './VuelingLogo'
import RyanairLogo from './RyanairLogo'
import AirArabiaLogo from './AirArabiaLogo'
import LaudamotionLogo from './LaudamotionLogo'
import IberiaLogo from './IberiaLogo'
import RoyalAirLogo from './RoyalAirLogo'
import AirEuropaLogo from './AirEuropaLogo'
import WizzAirLogo from './WizzAirLogo'
import TapLogo from './TapLogo'
import EasyJetLogo from './EasyJetLogo'

import './AirlineLogo.scss'

const getLogoComponent = (airline, props) => {
  switch (airline) {
    case "Vueling Airlines":
      return <VuelingLogo {...props} />
    case "Ryanair":
      return <RyanairLogo {...props} />
    case "Air Arabia Maroc":
      return <AirArabiaLogo {...props} />
    case "Laudamotion":
      return <LaudamotionLogo {...props} />
    case "Iberia":
      return <IberiaLogo {...props} />
    case "Royal Air Maroc":
      return <RoyalAirLogo {...props} />
    case "Air Europa":
      return <AirEuropaLogo {...props} />
    case "Wizz Air":
      return <WizzAirLogo {...props} />
    case "TAP":
      return <TapLogo {...props} />
    case "easyJet":
      return <EasyJetLogo {...props} />
    default:
      return null
  }
}

const AirlineLogo = ({ airline }) => {
  const Logo = getLogoComponent(airline, {
    width: 100,
  })

  return (
    <div className="airline-logo">
      {Logo}
    </div>
  )
}

export { AirlineLogo }

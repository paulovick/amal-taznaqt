import React from 'react'
import { ReactComponent as VuelingLogo } from "./VuelingLogo.svg"
import { ReactComponent as RyanairLogo } from "./RyanairLogo.svg"
import { ReactComponent as AirArabiaLogo } from "./AirArabiaLogo.svg"

import './AirlineLogo.scss'

const getLogoComponent = (airline) => {
  switch (airline) {
    case "Vueling Airlines":
      return VuelingLogo
    case "Ryanair":
      return RyanairLogo
    case "Air Arabia Maroc":
      return AirArabiaLogo
    default:
      return null
  }
}

const AirlineLogo = ({ airline }) => {
  const Logo = getLogoComponent(airline)

  return (
    <div className="airline-logo">
      {Logo &&
        <Logo />
      }
    </div>
  )
}

export { AirlineLogo }

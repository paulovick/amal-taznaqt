import React from 'react'
import LandingPageHeader from "./components/LandingPageHeader/LandingPageHeader"
import { AboutUs } from "./components/AboutUs/AboutUs"
import { Projects } from "./components/Projects/Projects"

const LandingPage = () => {
  return (
    <div className="wrapper">
      <LandingPageHeader />
      <AboutUs />
      <Projects />
    </div>
  )
}

export { LandingPage }

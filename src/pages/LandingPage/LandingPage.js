import React from 'react'
import LandingPageHeader from "./components/LandingPageHeader/LandingPageHeader"
import { AboutUs } from "./components/AboutUs/AboutUs"
import { Projects } from "./components/Projects/Projects"

const LandingPage = (props) => {
    console.log(props)
  return (
    <div className="wrapper">
      <LandingPageHeader {...props}/>
      <AboutUs />
      <Projects />
    </div>
  )
}

export { LandingPage }

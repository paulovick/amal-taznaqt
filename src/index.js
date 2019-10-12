import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'assets/css/bootstrap.min.css'
import 'assets/scss/now-ui-kit.scss'
import 'assets/demo/demo.css'
import 'assets/demo/nucleo-icons-page-styles.css'

import { LandingPage } from "./pages/LandingPage/LandingPage"
import { RegisterPage } from "./pages/RegisterPage/RegisterPage"
import { FlightsPage } from "./pages/FlightsPage/FlightsPage"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/register" render={RegisterPage} />
        <Route path="/flights" render={FlightsPage} />
        <Route path="/" render={LandingPage} />

      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

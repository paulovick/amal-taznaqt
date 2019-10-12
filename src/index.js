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
import { InfoPage } from "./pages/InfoPage/InfoPage"
import { ProfilePage } from "./pages/ProfilePage/ProfilePage"
import { GroupsPage } from "./pages/GroupsPage/GroupsPage"
import { CostsPage } from "./pages/CostsPage/CostsPage"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        {/* Private */}
        <Route path="/info" render={InfoPage} />
        <Route path="/profile" render={ProfilePage} />
        <Route path="/groups" render={GroupsPage} />
        <Route path="/flights" render={FlightsPage} />
        <Route path="/costs" render={CostsPage} />

        {/* Public */}
        <Route path="/register" render={RegisterPage} />
        <Route path="/" render={LandingPage} />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

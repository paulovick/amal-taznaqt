import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
import { DetailsCard } from "./pages/InfoPage/components/DetailsCard/DetailsCard"
import { CustomLoginPage } from "./pages/LoginPage/CustomLoginPage"


class App extends React.Component {
  render() {
    let { location } = this.props;

    return (
        <Router>
          <Switch location={location}>
            {/* Private */}
            <Route path="/info/details" component={DetailsCard}/>
            <Route path="/info" component={InfoPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/groups" component={GroupsPage} />
            <Route path="/flights" component={FlightsPage} />
            <Route path="/costs" component={CostsPage} />
            <Route path="/login" component={CustomLoginPage} />

            {/* Public */}
            <Route path="/register" component={RegisterPage} />
            <Route path="/" component={LandingPage} />

          </Switch>
        </Router>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
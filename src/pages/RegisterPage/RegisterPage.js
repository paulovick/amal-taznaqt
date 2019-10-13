import React from 'react'
import LandingPageHeader from "../LandingPage/components/LandingPageHeader/LandingPageHeader";
import { ReactTypeformEmbed } from 'react-typeform-embed';

import './RegisterPage.scss'

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.state = {}

  }

  componentDidMount() {}

  render() {
    return (
        <div className={'register-page'}>
          <LandingPageHeader/>
          <div className={'register-page-card-container'}>
            <ReactTypeformEmbed url="https://developerplatform.typeform.com/to/EYEzpA" />;
          </div>
        </div>
    )
  }



};

export { RegisterPage }

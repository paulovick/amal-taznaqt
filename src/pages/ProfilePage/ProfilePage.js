import React from 'react'
import { Container } from "reactstrap"
import { ProfilePageHeader } from "./components/ProfilePageHeader/ProfilePageHeader"

import './ProfilePage.scss'

const ProfilePage = (props) => {
    let _props= props.location.attr
    if (!_props){
        _props={volunteerName:"Gisela Monrroe Amado", volunteerCity:"Barcelona" ,volunteerImg:require("assets/img/gisela.png")}
    }

  return (
    <div className="wrapper">
      <ProfilePageHeader {..._props} />
      <div className="section about-me">
        <Container>
          <h3 className="title">About me</h3>
          <h5 className="description">
        Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia tortor semper libero, magnis placerat facilisis auctor parturient cursus massa felis congue dignissim, tincidunt class augue dictumst mauris torquent posuere facilisi pellentesque urna. Suspendisse molestie est velit volutpat risus consequat quisque magna, accumsan pulvinar nulla urna vitae libero metus, arcu tortor justo vestibulum feugiat aenean auctor. Vivamus luctus justo sociis litora suspendisse velit habitant fringilla, montes class nibh arcu in vestibulum quis dignissim hac, sollicitudin neque eleifend bibendum penatibus tellus auctor.
          </h5>
        </Container>
      </div>
    </div>
  )
}

export { ProfilePage }

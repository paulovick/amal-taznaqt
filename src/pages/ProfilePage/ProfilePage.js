import React from 'react'
import { Container } from "reactstrap"
import { ProfilePageHeader } from "./components/ProfilePageHeader/ProfilePageHeader"

import './ProfilePage.scss'

const ProfilePage = () => {
  return (
    <div className="wrapper">
      <ProfilePageHeader />
      <div className="section about-me">
        <Container>
          <h3 className="title">About me</h3>
          <h5 className="description">
            An artist of considerable range, Ryan — the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
            and records all of his own music, giving it a warm, intimate feel
            with a solid groove structure. An artist of considerable range.
          </h5>
        </Container>
      </div>
    </div>
  )
}

export { ProfilePage }

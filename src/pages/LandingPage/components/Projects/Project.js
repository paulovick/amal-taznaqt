import React, { useState } from 'react'
import { Button, Col } from "reactstrap"
import { Redirect } from "react-router"

const Project = ({ projectName }) => {
  const [redirect, setRedirect] = useState(false)

  const handleOnButtonClick = () => {
    setRedirect(true)
  }

  if (redirect)
    return <Redirect to="/register" />

  return (
    <Col md="4">
      <div className="team-player">
        <img
          alt="..."
          className="rounded-circle img-fluid img-raised"
          src={require("assets/img/avatar.jpg")}
        />
        <h4 className="title">{projectName}</h4>
        <p className="description">
          You can write here details about one of your team members.
          You can give more details about what they do. Feel free to
          add some links for people to be able to follow them outside the site.
        </p>
        <Button color="info" outline={true} size="lg" onClick={handleOnButtonClick}>Regístrame!</Button>
      </div>
    </Col>
  )
}

export { Project }

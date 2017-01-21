import React from 'react'
import {Button} from "react-bootstrap"
import Logo from "../Navigation/logo.svg"
import './DashboardView.css'
import { Link } from 'react-router'

export default () => (
  <div className="dashboard">
    <div className="bla">
      <img src={Logo} alt="logo" className="logo-dashboard"/>
    </div>
    <h1 className="title-dashboard">Wave</h1>
    <h2>The world's first-class water sports & leisure app</h2>
    <h3>Choose the water sports in the{' '}
      <Link to='/form'>
        <Button bsStyle="primary" bsSize="large">Form</Button>
      </Link> and follow the arrows</h3>


  </div>
)


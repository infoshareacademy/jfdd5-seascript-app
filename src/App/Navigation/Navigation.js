import React from "react";
import {Link} from "react-router";
import {connect} from 'react-redux'

import "./Navigation.css";
import {StepButton} from './StepButton'
import {logOut} from '../../state/login-form/logOut'

const mapStateToProps = state => ({
  session: state.logInStatusData.session
})

const mapDispatchToProps = dispatch => ({
  logOut: (token) => dispatch(logOut(token))
})

class Navigation extends React.Component {
  constructor() {
    super()
  }

  render() {

    const urlMap = {
      '/form': 1,
      '/place-list': 2,
      '/place-compare':3,
      '/favorites':4,
      '/calendar':5,
      '/login-form':6,
      '/registration':7
    }

    const currentStepId = urlMap[this.props.location.pathname];


    console.log(this.props.location.pathname, currentStepId)
    return (
      <div className="navbar">
        <StepButton for="/form" stepId="1" currentStepId={currentStepId}>
          1. Start
        </StepButton>
        <StepButton for="/place-list" stepId="2" currentStepId={currentStepId}>
          2. Place list
        </StepButton>
        <StepButton for="/place-compare" stepId="3" currentStepId={currentStepId}>
          3. Compare
        </StepButton>

        {this.props.session !== null ?
          <button><Link to="/favorites" className="link">Favorites</Link></button> : ''
        }
        {this.props.session !== null ?
          <button><Link to="/calendar" className="link">Calendar</Link></button> : ''
        }

        {this.props.session === null ?
        <button><Link to="/login-form" className="link">Sign in</Link></button> :
        <button type="submit"
                onClick={(event) => {
                  event.preventDefault()
                  this.props.logOut(this.props.session.id)
                }
                }>Sign out
        </button> }
        {this.props.session === null ?
          <button><Link to="/registration" className="link">Sign up</Link></button> : ''
        }
      </div>
    )
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Navigation)



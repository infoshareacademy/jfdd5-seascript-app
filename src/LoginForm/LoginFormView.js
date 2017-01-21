import React from 'react'
import {connect} from 'react-redux'
import {logOut} from '../state/login-form/logOut'
import {logIn} from '../state/login-form/logIn'


const mapStateToProps = state => ({
  user: state.logInStatusData.user,
  pending: state.logInStatusData.pending,
  session: state.logInStatusData.session
})

const mapDispatchToProps = dispatch => ({
  logIn: (username, password) => dispatch(logIn(username, password)),
  logOut: (token) => dispatch(logOut(token)),
})

class LoginFormView extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = (event) => {
      event.preventDefault()
      this.props.logIn(this.state.username, this.state.password)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Username:
          <input value={this.state.username}
                 type="text"
                 onChange={
                   event => this.setState({
                     username: event.target.value
                   })
                 }/>
          Password:
          <input value={this.state.password}
                 type="text"
                 onChange={
                   event => this.setState({
                     password: event.target.value
                   })
                 }/>
          <button type="submit">Log in</button>
        </form>
        <button type="submit"
                onClick={(event) => {
                  event.preventDefault()
                  this.props.logOut(this.props.session.id)
                }
                }>Log out
        </button>
        <p>{this.state.username}</p>
        <p>{this.state.password}</p>

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormView)
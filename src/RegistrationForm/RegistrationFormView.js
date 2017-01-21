import React from 'react'

class RegistrationFormView extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      email: '',
      password: ''
    }

    this.handleSubmit = (event) => {
      event.preventDefault()
      fetch(
        'https://powerful-fortress-34565.herokuapp.com/api/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
          })
        }
      ).then(
        response => {
          if (response.status == '422') {
            console.log("nie udalo sie zarejestrowac uzytkownika")
          }
          else {
            return response.json()
          }
        }
      ).then(
        userData => {
          console.log(userData)
        }
      ).catch(
        error => console.log(error)
      )
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
          Email:
          <input value={this.state.email}
                 type="text"
                 onChange={
                   event => this.setState({
                     email: event.target.value
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
          <button type="submit">Register</button>
        </form>

        <p>{this.state.username}</p>
        <p>{this.state.password}</p>

      </div>
    )
  }
}

export default RegistrationFormView
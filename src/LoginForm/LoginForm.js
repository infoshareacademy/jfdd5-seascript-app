import React from 'react'
import {connect} from 'react-redux'
import {
  Button, Modal, Form, FormGroup,
  ControlLabel, FormControl, Col, Checkbox
} from 'react-bootstrap'
import {
  fetchLoggedInUser
} from '../state/login-form/actionCreators'

const mapStateToProps = state => ({
  user: state.logInStatusData.user,
  pending: state.logInStatusData.pending
})

const mapDispatchToProps = dispatch => ({
  fetchData: (username, password) => dispatch(fetchLoggedInUser(username, password))
})


class LoginForm extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      showModal: false
    }

    this.handleSubmit = (event) => {
      event.preventDefault()
      this.props.fetchData(this.state.username, this.state.password)
    }

    this.close = () =>
      this.setState({showModal: false});


    this.open = () =>
      this.setState({showModal: true});
  }

  render() {
    return (
      <div>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          LOG IN
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>xxx</Modal.Title>
          </Modal.Header>
          <Modal.Body>


            <h4>Log in</h4>

            <Form horizontal onSubmit={this.handleSubmit}>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Username
                </Col>
                <Col sm={10}>
                  <FormControl type="name"
                               placeholder="Name"
                               value={this.state.username}
                               onChange={
                                 event => this.setState({
                                   username: event.target.value
                                 })
                               }/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl type="password"
                               placeholder="Password"
                               value={this.state.password}
                               onChange={
                                 event => this.setState({
                                   password: event.target.value
                                 })
                               }/>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Checkbox>I agree on terms and conditions</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">
                    LOG IN
                  </Button>
                </Col>
              </FormGroup>
            </Form>

            <p>{this.state.username}</p>
            <p>{this.state.password}</p>
            
          </Modal.Body>
          <Modal.Footer>
            {this.props.user !== null ? this.close : <p>Check login and password</p>}
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)

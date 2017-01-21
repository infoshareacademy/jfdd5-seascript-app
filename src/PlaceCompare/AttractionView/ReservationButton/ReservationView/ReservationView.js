import React from "react";
import {connect} from "react-redux";
import {Button, Form, FormGroup, ControlLabel, FormControl, Col, Checkbox} from "react-bootstrap";
import {addReservations} from '../../../../state/reservation/addToReservations'

const mapStateToProps = state => ({
 thingsToCompare: state.attractionAndPlaceData,
  session: state.logInStatusData.session
})

const mapDispatchToProps = dispatch => ({
  addReservations: (userId, token, reservation) => dispatch(addReservations(userId, token, reservation))
})


class ReservationView extends React.Component {
  constructor() {
    super()

    this.state = {
      //name: '',
      //surname: '',
      email: '',
      startDate: '',
      endDate: '',
      didSubmit: false
    }

  }
  render() {
    return ( this.state.didSubmit ? <p>Your reservation has been succesfully sent!!!</p> :

    <Form horizontal onSubmit={(event) => {
      event.preventDefault()
      this.setState({ didSubmit: true })
      this.props.addReservations(this.props.session.userId, this.props.session.id, {
        ...this.state,
        place: this.props.place,
        attractionName: this.props.attractionName,
        attractionImage: this.props.attractionImage
      })
    }}>
      <h4>In order to make a reservation you have to supply us with contact data</h4>

      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <FormControl type="email" placeholder="Email" value={this.state.email}
                       onChange={(event) => this.setState({email: event.target.value})}/>
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Start date
        </Col>
        <Col sm={10}>
          <FormControl type="date" placeholder="Start date" value={this.state.startDate}
                       onChange={(event) => this.setState({startDate: event.target.value})}/>
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          End date
        </Col>
        <Col sm={10}>
          <FormControl type="date" placeholder="End date" value={this.state.endDate}
                       onChange={(event) => this.setState({endDate: event.target.value})}/>
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
            BOOK
          </Button>
        </Col>
      </FormGroup>
    </Form>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ReservationView)
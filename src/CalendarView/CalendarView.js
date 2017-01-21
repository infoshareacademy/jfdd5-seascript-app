import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import {connect} from "react-redux";
import {fetchReservations} from '../state/reservation/fetchReservations'
import {Grid, Row, Col} from "react-bootstrap";

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

moment.locale("en");

const mapStateToProps = state => ({
  reservations: state.makeReservationData.reservations,
  session: state.logInStatusData.session
})

const mapDispatchToProps = dispatch => ({
  fetchReservations: (userId, token) => dispatch(fetchReservations(userId, token))
})

class CalendarView extends React.Component {

  componentWillMount() {
    this.props.session !== null ?
      this.props.fetchReservations(this.props.session.userId, this.props.session.id) : ''
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={4}>
            <div className="PlaceListItemIcon">
              {this.props.reservations.length > 0 ? <img src={process.env.PUBLIC_URL + '/images/icons/attractions/' + this.props.reservations[0].attractionImage } role="presentation" /> : null }
              <p></p>
            </div>
          </Col>
          <Col xs={8}>
            <div style={{height: 300}}>
              <p>{this.props.reservationsPlace}</p>
        <BigCalendar
          events={this.props.reservations.map(reservation => ({
              title: reservation.details.place + ' ' + reservation.details.attractionName,
              allDay: true,
              start: new Date(reservation.details.date),
              end: new Date(reservation.details.date),
            })
          )}

          step={15}
          timeslots={8}
          defaultView="week"
          defaultDate={new Date()}
        />
      </div>
            </Col>
          </Row>
        </Grid>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView)
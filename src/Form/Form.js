import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {FormGroup, ControlLabel, FormControl, Button} from "react-bootstrap";
import {attractions} from "../Database";

const mapStateToProps = state => ({
  attractionsIds: state.attractionsData.attractionsIds
})

const mapDispatchToProps = dispatch => ({
  chooseAttraction: attractionId => dispatch({type: 'ADD_ATTRACTION', attractionId: attractionId}),
  removeAttraction: (attractionId) => dispatch ({
    type: 'REMOVE_ATTRACTION',
    attractionId: attractionId
})
})


class Form extends React.Component {
  constructor() {
    super()

    this.handleSubmit = (event) => {
      event.preventDefault()
      localStorage.setItem('my-app-state', JSON.stringify(this.state))

    }

    const data = localStorage.getItem('my-app-state')
    if (data) {
      this.state = JSON.parse(data)
    } else {
      this.state = {
        attraction: []
      }
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <ControlLabel>Attraction</ControlLabel>
          <FormControl
            type="text"
            value={this.state.attraction}
            onChange={
              event => this.setState({
                attraction: event.target.value
              })
            }
            placeholder="Enter attraction"
          />
          <ul>
            {attractions.map(attraction =>
              <li key={attraction.id}>
                { this.props.attractionsIds.indexOf(attraction.id) === -1 ?
              <Button onClick={() => this.props.chooseAttraction(attraction.id)}>Add {attraction.name}</Button> :
              <Button onClick={() => this.props.removeAttraction(attraction.id)}>Remove {attraction.name}</Button>}
              </li>)}
          </ul>
          <Link to="place-list">
            <Button type="submit">Submit</Button>
          </Link>
        </FormGroup>
      </form>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)
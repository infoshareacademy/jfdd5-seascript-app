import React from 'react'
import { connect } from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'

import {AttractionView} from './AttractionView'

import {fetchFavorites} from '../state/favorites/fetchFavorites'
import './PlaceCompare.css'
import './AttractionView/AttractionView.css'

const mapStateToProps = state => ({
  session: state.logInStatusData.session
})

const mapDispatchToProps = dispatch => ({
  fetchFavorites: (userId, token) => dispatch(fetchFavorites(userId, token))
})


class PlaceCompare extends React.Component {

  componentWillMount () {
    this.props.session !== null ?
    this.props.fetchFavorites(this.props.session.userId, this.props.session.id) : ''
  }

  render () {
    return (
      <div>
        <Grid>
          <Row>
            <h1 className="place-compare-title">Compare chosen attractions below:</h1>
          </Row>
          <Row>
            <AttractionView />
          </Row>
        </Grid>
      </div>
    )
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(PlaceCompare)
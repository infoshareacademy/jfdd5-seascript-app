import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import {connect} from 'react-redux'

import {additionals} from '../Database'

import {AttractionView} from './AttractionView'

const mapStateToProps = state => ({
  thingsToCompare: state.attractionAndPlaceData.thingsToCompare,
  chosenToFavoritesAttractions: state.chosenAttractionsToFavoritesData.chosenToFavoritesAttractions

})

const mapDispatchToProps = dispatch => ({
  addAttractionToFavorites: (attraction, place) => dispatch({
    type: 'ADD_ATTRACTION_AND_PLACE_TO_FAVORITES',
    attraction: attraction,
    place: place
  }),
})

const PlaceCompare = (props) => {

  const placesIds = props.thingsToCompare.map(attraction => attraction.place.id)
  const attractionIds = props.thingsToCompare.map(attraction => attraction.attraction.id)
  const chosenAdditionals = additionals.filter(
    additional => placesIds.indexOf(additional.placeId) && attractionIds.indexOf(additional.attractionId)
  )
  console.log("xxxxx", placesIds)
  console.log(attractionIds)
  console.log("2222222222222222", chosenAdditionals)


  const theLowestPrice = 100 // props.thingsToCompare.reduce((prev, next) => prev < next.price ? prev : next.price, Infinity)
  return (
    <div>
      <Grid>
        <Row>
          <Col xs={12}>
            <h1>List of chosen attractions</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={3}>
            <p>Activity:</p>
            <p>Price:</p>
            <p>City:</p>
            <p>Available:</p>
            <p>Children:</p>
            <p>Description:</p>
            <p>Ranking:</p>
            <p>Opinions:</p>
            <p>Other sports available:</p>
            <p>Favorites:</p>
            <p>Reservation:</p>
          </Col>
          {
            props.thingsToCompare.map(
              thing =>
                <Col xs={12} md={3}>
                  <AttractionView thing={thing}
                                  theLowestPrice={theLowestPrice}
                                  addAttractionToFavorites={props.addAttractionToFavorites}
                                  chosenToFavoritesAttractions={props.chosenToFavoritesAttractions}
                  />
                </Col>
            )
          }
        </Row>
      </Grid>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceCompare)
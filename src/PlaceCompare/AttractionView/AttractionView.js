import React from 'react'

import {connect} from 'react-redux'

import {Grid, Row, Col} from 'react-bootstrap'

import {Button} from 'react-bootstrap'
import './AttractionView.css'

import {attractions, places, additionals} from '../../Database'


import {ReservationButton} from './ReservationButton'

const mapStateToProps = state => ({
  thingsToCompare: state.attractionAndPlaceData.thingsToCompare,
  chosenToFavoritesAttractions: state.chosenAttractionsToFavoritesData.chosenToFavoritesAttractions

})

const mapDispatchToProps = dispatch => ({
  addAttractionToFavorites: (attraction, place) => dispatch({
    type: 'ADD_ATTRACTION_AND_PLACE_TO_FAVORITES',
    attraction: attraction,
    place: place
  })
})

class AttractionView extends React.Component {

  render() {
    const placesIds = this.props.thingsToCompare.map(attraction => attraction.place.id)
    const attractionIds = this.props.thingsToCompare.map(attraction => attraction.attraction.id)
    const chosenAdditionals = additionals.filter(
      additional => placesIds.indexOf(additional.placeId) !== -1 && attractionIds.indexOf(additional.attractionId) !== -1
    )
    console.log(placesIds)
    console.log(attractionIds)
    console.log(chosenAdditionals)


    const theLowestPrice = chosenAdditionals.reduce((prev, next) => prev < next.price ? prev : next.price, Infinity)
    console.log("yyyyyy", theLowestPrice)

    return (

      <div>
        <table>
          <tbody>
          <tr>
            <td className='table-header-width'>
              Activity:
            </td>
            {this.props.thingsToCompare.map(
              thing =>
                <td
                  className={theLowestPrice === thing.additional.price ? 'the-lowest-price' : 'other-price'}>{thing.attraction.name}</td>)}
          </tr>
          <tr>
            <td className='table-header-width'>
              Price:
            </td>
            {this.props.thingsToCompare.map(
              thing =>
                <td
                  className={theLowestPrice === thing.additional.price ? 'the-lowest-price' : 'other-price'}>{thing.additional.price}</td>)}
          </tr>
          <tr>
            <td>
              City:
            </td>
            {
              this.props.thingsToCompare.map(
                thing =>
                  <td
                    className={theLowestPrice === thing.additional.price ? 'the-lowest-price' : 'other-price'}>{thing.place.name}</td>)}
          </tr>
          <tr>
            <td className='table-header-width'>
              Available:
            </td>
            {
              this.props.thingsToCompare.map(
                thing =>
                  <td
                    className={theLowestPrice === thing.additional.price ? 'the-lowest-price' : 'other-price'}>{thing.additional.availability}</td>)}
          </tr>
          <tr>
            <td className='table-header-width'>
              Children:
            </td>
            {
              this.props.thingsToCompare.map(
                thing =>
                  <td
                    className={theLowestPrice === thing.additional.price ? 'the-lowest-price' : 'other-price'}>{thing.additional.children === true ? 'yes' : 'no'}</td>)}
          </tr>
          <tr>
            <td className='table-header-width'>
              Description:
            </td>
            {
             this.props.thingsToCompare.map(
                thing =>
                  <td
                    className={theLowestPrice === thing.additional.price ? 'the-lowest-price' : 'other-price'}>{thing.additional.content}</td>)}
          </tr>
          <tr>
            <td className='table-header-width'>
              Ranking:
            </td>
            {
              this.props.thingsToCompare.map(
                thing =>
                  <td
                    className={theLowestPrice === thing.additional.price ? 'the-lowest-price' : 'other-price'}>{thing.additional.ranking}</td>)}
          </tr>
          <tr>
            <td className='table-header-width'>
              Opinions:
            </td>
            {
              this.props.thingsToCompare.map(
                thing =>
                  <td
                    className={theLowestPrice === thing.additional.price ? 'the-lowest-price' : 'other-price'}>{thing.additional.opinion}</td>)}
          </tr>
          <tr>
            <td className='table-header-width'>
              Other sports available:
            </td>
            {
              this.props.thingsToCompare.map(
                thing =>
                  <td
                    className={theLowestPrice === thing.additional.price ? 'the-lowest-price' : 'other-price'}>{attractions.filter(attraction =>
                    thing.place.attractions.indexOf(attraction.id) !== -1
                  ).map(attraction => <li key={attraction.id}>{attraction.name}</li>)}</td>)}
          </tr>
          <tr>
            <td>
              {''}
              </td>
              {
                this.props.thingsToCompare.map(
                  thing =>
                    <td><Button onClick={() =>
                      this.props.addAttractionToFavorites(thing.attraction, thing.place)}>
                      ADD TO FAVORITES</Button></td>)}
          </tr>
          <tr>
            <td>
              {''}
            </td>

              {
                this.props.thingsToCompare.map(
                  thing =>
                    <td
                      className={theLowestPrice === thing.additional.price ? 'the-lowest-price' : 'other-price'}><ReservationButton /></td>)}
          </tr>
          </tbody>
        </table>

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AttractionView)


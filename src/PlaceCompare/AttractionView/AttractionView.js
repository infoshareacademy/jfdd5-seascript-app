import React from 'react'

import { Button } from 'react-bootstrap'

import {places} from '../data'
import {attractions} from '../data'
import {additionals} from '../data'
import {ReservationButton} from './ReservationButton'


export default class extends React.Component {

  render() {
    console.log(places)
    console.log(attractions.map(attraction=> attraction.id))
    return (
      <div>
        <p>
            {additionals.filter(additional => additional.placeId === this.props.place.id && this.props.place.attractions.indexOf(additional.attractionId !== -1)
            ).map(item => item.price)}
        </p>
        <p>{this.props.place.name}</p>
        <p>{additionals.filter(additional => additional.placeId === this.props.place.id && this.props.place.attractions.indexOf(additional.attractionId !== -1)
        ).map(item => item.availability)}</p>
        <p>
          {additionals.filter(additional => additional.placeId === this.props.place.id && this.props.place.attractions.indexOf(additional.attractionId !== -1)
          ).map(item => item.children)}
        </p>
        <p>
          {additionals.filter(additional => additional.placeId === this.props.place.id && this.props.place.attractions.indexOf(additional.attractionId !== -1)
          ).map(item => item.content)}
        </p>
        <p>
          {additionals.filter(additional => additional.placeId === this.props.place.id && this.props.place.attractions.indexOf(additional.attractionId !== -1)
          ).map(item => item.ranking)}
        </p>
        <p>
          {additionals.filter(additional => additional.placeId === this.props.place.id && this.props.place.attractions.indexOf(additional.attractionId !== -1)
          ).map(item => item.opinion)}
        </p>
        <p>
          {
            this.props.place.attractions.map(attraction => attraction)}
        </p>


        <Button>ADD TO FAVORITES</Button>
        <ReservationButton />
      </div>
    )
  }
}

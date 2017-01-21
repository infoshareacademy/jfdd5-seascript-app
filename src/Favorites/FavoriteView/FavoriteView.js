import React from 'react'
import {connect} from 'react-redux'
import {Button, Grid, Col, Row, Popover, OverlayTrigger} from "react-bootstrap";
import { additionals, attractions, places } from '../../Database'
import MdStars  from 'react-icons/lib/md/stars'
import './FavoriteView.css'

const mapStateToProps = state => ({
  session: state.logInStatusData.session
})

class FavoriteView extends React.Component {
  render() {

    const popoverHoverFocus = (
      <Popover id="popover-trigger-hover-focus">
        Remove from Favorites
      </Popover>
    );

    const chosenAdditional = additionals.find(company =>
     company.id === this.props.favorite.itemId )

    const chosenAttraction = attractions.find(attraction =>
    attraction.id === chosenAdditional.attractionId )

    const chosenPlace = places.find(place =>
    place.id === chosenAdditional.placeId
    )

    return (
      <div className="favorite-container">
        <div className="favorite-photo-container">
          <OverlayTrigger trigger='hover' placement="top" overlay={popoverHoverFocus}>
            <a className="favorites-remove-button"
               onClick={() =>
                 this.props.removeAttractionFromFavorites(
                   this.props.session.userId, this.props.session.id, this.props.favorite.id)}
            ><MdStars/></a>
          </OverlayTrigger>
          <img
            src={process.env.PUBLIC_URL + '/images/company-logos/' + chosenAdditional.companyPhoto}
            role="presentation"
            className="company-photo"
          />
        </div>
        <h3 className="favorite-attraction-name">{chosenAttraction.name}</h3>
        <p className="favorite-place-name">{chosenPlace.name}</p>
        <p>
          <Button bsStyle="primary"
                  bsSize="large"
          >Go to website...</Button>&nbsp;
        </p>
      </div>
    )
  }
}

export default connect(mapStateToProps)(FavoriteView)
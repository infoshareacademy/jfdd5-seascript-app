import React from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'
import {FavoriteView} from './FavoriteView'
import {additionals} from '../Database'
import './Favorites.css'


import {addToFavorites} from '../state/favorites/addToFavorites'
import {removeFromFavorites} from '../state/favorites/deleteFromFavorites'
import {fetchFavorites} from '../state/favorites/fetchFavorites'

const mapStateToProps = state => ({
  chosenToFavoritesAttractions: state.chosenAttractionsToFavoritesData.chosenToFavoritesAttractions,
  favoritesItems: state.chosenAttractionsToFavoritesData.favoritesItems,
  session: state.logInStatusData.session
})

const mapDispatchToProps = dispatch => ({
  fetchFavorites: (userId, token) => dispatch(fetchFavorites(userId, token)),
  addToFavorites: (userId, token, favoriteId) => dispatch(addToFavorites(userId, token, favoriteId)),
  removeFromFavorites: (userId, token, favoriteId) => dispatch(removeFromFavorites(userId, token, favoriteId))
})

class Favorites extends React.Component {

  componentWillMount() {
    this.props.session !== null ?
      this.props.fetchFavorites(this.props.session.userId, this.props.session.id) : ''
  }


  render() {
    return (
      <div>
        <h1 className="favorites-header">Your list of favorites:</h1>
        <Grid>
          <Row>
            {
              this.props.favoritesItems.map(
                favorite =>
                  <Col xs={12} sm={6} md={4}>
                    <FavoriteView favorite={favorite}
                                  addAttractionToFavorites={this.props.addToFavorites}
                                  removeAttractionFromFavorites={this.props.removeFromFavorites}
                    />
                  </Col>
              )
            }
          </Row>
        </Grid>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)

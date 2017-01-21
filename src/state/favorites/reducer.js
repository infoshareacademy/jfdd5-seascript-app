import {
  FETCH_USER_FAVORITES__BEGIN,
  FETCH_USER_FAVORITES__SUCCESS,
  FETCH_USER_FAVORITES__FAILURE,
  ADD_USER_FAVORITES__BEGIN,
  ADD_USER_FAVORITES__FAILURE,
  ADD_USER_FAVORITES__SUCCESS,
  REMOVE_USER_FAVORITES__BEGIN,
  REMOVE_USER_FAVORITES__SUCCESS,
  REMOVE_USER_FAVORITES__FAILURE
}
  from './actionTypes'

const initialState = {
  favoritesItems: []
}

export default (state=initialState, action) => {
  switch (action.type) {
    case FETCH_USER_FAVORITES__SUCCESS:
      return {
        ...state,
        favoritesItems: action.favoritesItems
      }
    case FETCH_USER_FAVORITES__FAILURE:
      return {
        ...state,
        favoritesItems: []
      }
    case ADD_USER_FAVORITES__SUCCESS:
      return {
        ...state,
        favoritesItems: state.favoritesItems.concat(action.favoriteItem)
      }
    case REMOVE_USER_FAVORITES__SUCCESS:
      return {
        favoritesItems: state.favoritesItems.filter(
          favorite =>
          favorite.id !== action.favoriteId)
      }
    default : return state
  }
}


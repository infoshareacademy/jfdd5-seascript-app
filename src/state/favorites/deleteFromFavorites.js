import {
  REMOVE_USER_FAVORITES__BEGIN,
  REMOVE_USER_FAVORITES__SUCCESS,
  REMOVE_USER_FAVORITES__FAILURE
}
  from './actionTypes'


export const removeFromFavorites = (userId, token, favoriteItemToRemoveId) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_USER_FAVORITES__BEGIN
    })

    fetch('https://powerful-fortress-34565.herokuapp.com/api/users/' + userId + '/favoriteItems/' + favoriteItemToRemoveId + '?access_token=' + token, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(
      response => {
        if (response.status === 204) {
          dispatch({
            type: REMOVE_USER_FAVORITES__SUCCESS,
            favoriteId: favoriteItemToRemoveId
          })
        }
        else {
          return response.json().then(
            error => dispatch({type: REMOVE_USER_FAVORITES__FAILURE, error: error})
          )
        }
      }
    )
  }
}


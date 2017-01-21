import {
  ADD_USER_FAVORITES__BEGIN,
  ADD_USER_FAVORITES__SUCCESS,
  ADD_USER_FAVORITES__FAILURE
}
from './actionTypes'


export const addToFavorites = (userId, token, favoriteId) => {
  return (dispatch) =>
  {
    dispatch({
      type: ADD_USER_FAVORITES__BEGIN
    })

    fetch('https://powerful-fortress-34565.herokuapp.com/api/users/' + userId + '/favoriteItems?access_token=' + token, {
        method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        itemId: favoriteId
      })
      }
    ).then(
      response => {
        if (response.status === 401) {
          dispatch({
            type: ADD_USER_FAVORITES__FAILURE
          })
        }
        else {
          return response.json()
        }
      }
    ).then(
      favoriteItem => {
        dispatch({
          type: ADD_USER_FAVORITES__SUCCESS,
          favoriteItem: favoriteItem
        })
      }
    )
  }
}



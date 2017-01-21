import {
  FETCH_USER_RESERVATIONS__BEGIN,
  FETCH_USER_RESERVATIONS__SUCCESS,
  FETCH_USER_RESERVATIONS__FAILURE
}
  from './actionTypes'


export const fetchReservations = (userId, token) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_USER_RESERVATIONS__BEGIN
    })

    fetch(
      'https://powerful-fortress-34565.herokuapp.com/api/users/' + userId + '/events?access_token=' + token
    ).then(
      response => {
        if (response.status === 200) {
          response.json().then(
            reservation => dispatch({
              type: FETCH_USER_RESERVATIONS__SUCCESS,
              reservation: reservation
            })
          )
        }
        if (response.status === 401) {
          dispatch({type: FETCH_USER_RESERVATIONS__FAILURE})
        }
      }
    )
  }
}

import {
ADD_USER_RESERVATIONS__BEGIN,
ADD_USER_RESERVATIONS__SUCCESS,
ADD_USER_RESERVATIONS__FAILURE
}
  from './actionTypes'


export const addReservations = (userId, token, reservation) => {
  return (dispatch) =>
  {
    dispatch({
      type: ADD_USER_RESERVATIONS__BEGIN
    })

    fetch('https://powerful-fortress-34565.herokuapp.com/api/users/' + userId + '/events?access_token=' + token, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          details: reservation
        })
      }
    ).then(
      response => {
        if (response.status === 401) {
          dispatch({
            type: ADD_USER_RESERVATIONS__FAILURE
          })
        }
        else {
          return response.json()
        }
      }
    ).then(
      reservation => {
        dispatch({
          type: ADD_USER_RESERVATIONS__SUCCESS,
          reservation: reservation
        })
      }
    )
  }
}



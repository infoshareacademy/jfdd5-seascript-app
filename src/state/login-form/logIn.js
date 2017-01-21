import {
  FETCH_LOGIN_USER__BEGIN,
  FETCH_LOGIN_USER__SUCCESS,
  FETCH_LOGIN_USER__FAILURE,
  FETCH_USER_DATA__BEGIN,
  FETCH_USER_DATA__SUCCESS,
  FETCH_USER_DATA__FAIL
}
from './actionTypes'


export const logIn = (username, password) => {
  return (dispatch) => {

    dispatch({
      type: FETCH_LOGIN_USER__BEGIN
    })

    fetch(
      'https://powerful-fortress-34565.herokuapp.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      }
    ).then(
      response => {
        if (response.status == '401') {
          dispatch({
            type: FETCH_LOGIN_USER__FAILURE
          })
        }
        else {
          return response.json()
        }
      }
    ).then(
      session => {
        dispatch({
          type: FETCH_LOGIN_USER__SUCCESS,
          session: session
        })

        dispatch(fetchUser(session.id, session.userId))
      }
    )
  }
}

export const fetchUser = (token, userId) => {
  return (dispatch) => {
    dispatch({type: FETCH_USER_DATA__BEGIN})
    fetch('http://localhost:3001/api/users/' + userId + '?access_token=' + token
    ).then(
      response => {
        if (response.status === 200) {
          response.json().then(
            userData => dispatch({type: FETCH_USER_DATA__SUCCESS, user: userData})
          )
        }
        if (response.status === 401) {
          dispatch({type: FETCH_USER_DATA__FAIL})
        }
      }
    )
  }
}
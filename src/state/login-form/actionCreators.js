import {
  FETCH_LOGIN_USER__BEGIN,
  FETCH_LOGIN_USER__SUCCESS,
  FETCH_USER_FAVS,
  FETCH_LOGIN_USER__FAILURE,
  RECEIVE_USER,
  LOG_OUT_SUCCESS
}
  from './actionTypes'

export const logIn = (username, password) => {
  return (dispatch) => {

    dispatch({
      type: FETCH_LOGIN_USER__BEGIN
    })

    fetch(
      'http://localhost:3001/api/users/login', {
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
      userData => {
        dispatch({
          type: FETCH_LOGIN_USER__SUCCESS,
          session: userData,
          token: userData.id
        })

        dispatch(fetchUser(userData.id, userData.userId))
      }
    ).catch(
      error => console.log(error)
    )
  }
}

export const fetchUser = (token, userId) => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/users/' + userId + '?access_token=' + token
    ).then(
      response => response.json()
    ).then(user => {
        console.log(user)
        dispatch({
          type: RECEIVE_USER,
          user: user
        })
      }
    )
  }
}


export const logOut = (token) => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/users/logout?access_token=' + token, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(
      response =>
        dispatch({
          type: LOG_OUT_SUCCESS
        })
    )
  }
}

// export const fetchLoggedInUser = (username, password) => {
//   return (dispatch) => {
//
//     dispatch({
//       type: FETCH_LOGIN_USER__BEGIN
//     })
//
//     fetch(
//       'http://localhost:8000/api/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           username: username,
//           password: password
//         })
//       }
//     ).then(
//       response => {
//         if (response.status == '401') {
//           console.log("źle")
//         }
//         else {
//           return response.json()
//         }
//       }
//     ).then(
//       data => {
//         dispatch({
//           type: FETCH_USER_FAVS,
//           favPlaces: data.favorites
//         })
//         dispatch({
//           type: FETCH_LOGIN_USER__SUCCESS,
//           user: data
//         })
//       }
//     ).catch(
//       error => console.log(error)
//     )
//   }
// }



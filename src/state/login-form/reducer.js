import {
  FETCH_LOGIN_USER__BEGIN,
  FETCH_LOGIN_USER__SUCCESS,
  FETCH_LOGIN_USER__FAILURE,
  LOG_OUT_SUCCESS,
  LOG_OUT_BEGIN,
  LOG_OUT_FAIL,
  FETCH_USER_DATA__SUCCESS,
  FETCH_USER_DATA__FAIL
}
  from './actionTypes'

const initialState = {
  user: null,
  pending: false,
  session: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_LOGIN_USER__BEGIN:
      return {
        ...state,
        pending: true
      }
    case FETCH_LOGIN_USER__SUCCESS:
      return {
        ...state,
        session: action.session,
        pending: false
      }
    case FETCH_LOGIN_USER__FAILURE:
      return initialState

    case LOG_OUT_SUCCESS:
     return initialState

    case LOG_OUT_FAIL:
      return initialState

    case FETCH_USER_DATA__SUCCESS:
      return {
        ...state,
        user: action.user
      }
    case FETCH_USER_DATA__FAIL:
      return initialState
    default:
      return state
  }
}
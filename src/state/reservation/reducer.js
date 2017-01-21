import {
  MAKE_RESERVATION,
  FETCH_USER_RESERVATIONS__BEGIN,
  FETCH_USER_RESERVATIONS__SUCCESS,
  FETCH_USER_RESERVATIONS__FAILURE,
  ADD_USER_RESERVATIONS__BEGIN,
  ADD_USER_RESERVATIONS__FAILURE,
  ADD_USER_RESERVATIONS__SUCCESS,
  REMOVE_USER_RESERVATIONS__BEGIN,
  REMOVE_USER_RESERVATIONS__FAILURE,
  REMOVE_USER_RESERVATIONS__SUCCESS
} from "./actionTypes";


const initialState = {
  reservations: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_RESERVATIONS__SUCCESS:
      return {
        ...state,
        reservations: action.reservation
      }
    case FETCH_USER_RESERVATIONS__FAILURE:
      return {
        ...state,
        reservations: []
      }
    case ADD_USER_RESERVATIONS__SUCCESS:
      return {
        ...state,
        reservations: state.reservations.concat(action.reservation)
      }
    case REMOVE_USER_RESERVATIONS__SUCCESS:
      return {
        reservations: state.reservations.filter(
          favorite =>
          favorite.id !== action.reservation)
      }
    default:
      return state
  }
}

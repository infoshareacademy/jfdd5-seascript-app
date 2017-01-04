const initialState = {
  thingsToCompare:[]
}

export default (state=initialState, action) => {
  console.log( action );
  switch (action.type) {
    case 'ADD_ATTRACTION_AND_PLACE_TO_COMPARE':
      return {
        ...state,
        thingsToCompare: state.thingsToCompare.concat({
          attraction: action.attraction,
          place: action.place,
          additional: action.additional
          }
        )
      }
    case 'REMOVE_ATTRACTION_AND_PLACE_FROM_COMPARE':
      return {
        ...state,
        thingsToCompare: state.thingsToCompare.filter(
          thing => (
            thing.attraction.id !== action.attraction.id ||
            thing.place.id !== action.place.id
          )
        )
      }
    default : return state
  }
}

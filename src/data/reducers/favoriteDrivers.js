import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './actionTypes'

/* Map woould be better with id's as keys  */
const favoriteDrivers = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      state.push(action.payload)
      return state
    default:
      return state

  }
}

export default favoriteDrivers

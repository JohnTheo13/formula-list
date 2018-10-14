import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, GET_FROM_STORAGE } from './actionTypes'

/* Map woould be better with id's as keys  */
const favoriteDrivers = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return action.payload
    case REMOVE_FROM_FAVORITES:
      return action.payload
    case GET_FROM_STORAGE:
      return action.payload ? action.payload : state
    default:
      return state
  }
}

export default favoriteDrivers

/* eslint-disable */
import {
  FETCHING_SEASONS,
  FETCHED_SEASONS,
  FAILED_FETCH_SEASONS,
} from './actionTypes'

const initial = {
  isfetching: false,
  fetched: false,
  failedFetch: false
}

const seasons = (state = initial, action) => {
  switch (action.type) {
    case FETCHING_SEASONS:
      return {
        ...state,
        isfetching: true,
      }
    case FETCHED_SEASONS:
      return {
        ...state,
        isfetching:false,
        fetched: true,
        list: action.payload
      }
    case FAILED_FETCH_SEASONS:
      return {
        ...state,
        isfetching: false,
        failedFetch: true
      }
    default:
      return state
  }
}

export default seasons

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
        isfetching: true,
        fetched: state.fetched,
        failedFetch: state.failedFetch,
      }
    case FETCHED_SEASONS:
      return {
        isfetching:false,
        fetched: true,
        failedFetch: state.failedFetch,
        list: action.payload
      }
    case FAILED_FETCH_SEASONS:
      return {
        fetched: false,
        isfetching: false,
        failedFetch: true,
        list: [],
      }
    default:
      return state
  }
}

export default seasons

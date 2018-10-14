/* eslint-disable one-var */
import { FETCHING_DRIVERS, FETCHED_DRIVERS, FAILED_FETCH_DRIVERS } from './actionTypes'

const initial = {
  isfetching: false,
  fetched: false,
  failedFetch: false,
  driversList: [],
}

const drivers = (state = initial, action) => {
  switch (action.type) {
    case FETCHING_DRIVERS:
      return {
        ...initial,
        isfetching: true,
      }
    case FETCHED_DRIVERS:
      return {
        failedFetch: state.failedFetch,
        isfetching: false,
        fetched: true,
        driversList: action.payload,
      }
    case FAILED_FETCH_DRIVERS:
      return {
        ...initial,
        isfetching: false,
        failedFetch: true,
        fetched: false,
      }
    default:
      return state
  }
}

export default drivers

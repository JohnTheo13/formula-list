import { FETCHING_DRIVERS, FETCHED_DRIVERS, FAILED_FETCH_DRIVERS } from './actionTypes'

const initial = {
  isfetching: false,
  fetched: false,
  failedFetch: false
}

const drivers = (state = initial, action) => {
  switch (action.type) {
    case FETCHING_DRIVERS:
      return {
        ...state,
        isfetching: true,
      }
    case FETCHED_DRIVERS:
      return {
        ...state,
        isfetching:false,
        fetched: true,
        driversList: action.payload
      }
    case FAILED_FETCH_DRIVERS:
      return {
        ...state,
        isfetching: false,
        failedFetch: true
      }
    default:
      return state

  }
}

export default drivers

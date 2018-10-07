import * as type from './actionTypes'

const initial = {
  isfetching: false,
  fetched: false,
  failedFetch: false
}

const seasonList = (state = initial, action) => {
  switch (action.type) {
    case type.START_FETCHING_SEASONS:
      return {
        ...state,
        isfetching: true,
      }
    case type.FETCHED_SEASONS:
      return {
        ...state,
        isfetching:false,
        fetched: true,
        list: action.payload
      }
    case type.FAILED_FETCH:
      return {
        ...state,
        isfetching: false,
        failedFetch: true
      }
    default:
      return state

  }
}

export default seasonList

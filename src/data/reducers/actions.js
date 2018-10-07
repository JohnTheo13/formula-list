import * as type from './actionTypes'
import { get } from '../requests/api'

const startfetchigSeasons = () => ({ type: type.START_FETCHING_SEASONS }),
      fetchedSeasons = seasonList => ({ type: type.FETCHED_SEASONS, payload: seasonList }),
      failedFetch = () => ({ type: type.FAILED_FETCH });

const getSeasons = url => dispatch => {
  dispatch(startfetchigSeasons())
  get(url)
    .then(({MRData: {SeasonTable: { Seasons }}}) =>
      dispatch(fetchedSeasons(Seasons)))
}

export { getSeasons }

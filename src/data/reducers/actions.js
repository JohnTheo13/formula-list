import {
  FETCHING_,
  FETCED_,
  FAILED_FETCH_ } from './actionTypes'
import { get } from '../requests/api'

const startfetchig = type => ({ type: FETCHING_[type] }),
      fetchedSeasons = (type, list) => ({ type: FETCED_[type], payload: list }),
      failedFetch = type => ({ type: FAILED_FETCH_[type] });

const getSeasons = url => dispatch => {
  dispatch(startfetchig('SEASONS'))
  get(url)
    .then(({MRData: {SeasonTable: { Seasons }}}) =>
      dispatch(fetchedSeasons('SEASONS', Seasons)))
    .catch(exception => dispatch(failedFetch('SEASONS')))
}

const getDrivers = url => dispatch => {
  dispatch(startfetchig('DRIVERS'))
  get('2018/driverStandings.json') //url
    .then(({MRData: { StandingsTable: { StandingsLists: [standing]  }}}) =>
      dispatch(fetchedSeasons('DRIVERS', standing.DriverStandings))
    )
    .catch(exception => dispatch(failedFetch('DRIVERS')))
}


export { getSeasons, getDrivers }

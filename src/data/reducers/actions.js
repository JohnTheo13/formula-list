import {
  FETCHING_,
  FETCED_,
  FAILED_FETCH_,
  SEASON_CHANGE } from './actionTypes'
import { get } from '../requests/api'

const startfetchig = type => ({ type: FETCHING_[type] }),
      fetchedSeasons = (type, list) => ({ type: FETCED_[type], payload: list }),
      failedFetch = type => ({ type: FAILED_FETCH_[type] }),
      seasonChange = season => ({ type: SEASON_CHANGE, payload: season })

const getSeasons = url => dispatch => {
  dispatch(startfetchig('SEASONS'))
  get(url)
    .then(({MRData: {SeasonTable: { Seasons }}}) =>
      dispatch(fetchedSeasons('SEASONS', Seasons)))
    .catch(exception => dispatch(failedFetch('SEASONS')))
}

const getDrivers = s => dispatch => {
  dispatch(startfetchig('DRIVERS'))
  dispatch(seasonChange(s))
  get(`${s.season}/driverStandings.json`) //url
    .then(({MRData: { StandingsTable: { StandingsLists: [{ DriverStandings }] }}}) =>
      dispatch(fetchedSeasons('DRIVERS', DriverStandings))
    )
    .catch(exception => dispatch(failedFetch('DRIVERS')))
}


export { getSeasons, getDrivers }

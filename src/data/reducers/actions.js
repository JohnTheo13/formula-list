import {
  FETCHING_,
  FETCED_,
  FAILED_FETCH_,
  SEASON_CHANGE,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES } from './actionTypes'
import { get } from '../requests/api'
import { storageAvailable } from '../helpers'
import store from '../store'

const startfetchig = type => ({ type: FETCHING_[type] }),
      fetchedSeasons = (type, list) => ({ type: FETCED_[type], payload: list }),
      failedFetch = type => ({ type: FAILED_FETCH_[type] }),
      seasonChange = season => ({ type: SEASON_CHANGE, payload: season }),
      addToFavorites = driver => ({ type: ADD_TO_FAVORITES, payload: driver }),
      removeFromFavorites = driver => ({ type: REMOVE_FROM_FAVORITES, payload: driver })

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

const addDriverToStorage = driver => dispatch => {
  const favoriteDrivers = store.getState().favoriteDrivers,
        { Driver: driverId } =  driver
  dispatch(addToFavorites({id: driverId, driver: driver}))
  if (storageAvailable('localStorage')) {
    window.localStorage('favoriteDrivers', favoriteDrivers)
  }
}

export { getSeasons, getDrivers, addDriverToStorage }

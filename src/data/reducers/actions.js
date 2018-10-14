import {
  FETCHING_,
  FETCED_,
  FAILED_FETCH_,
  SEASON_CHANGE,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  GET_FROM_STORAGE,
} from './actionTypes'
import { get } from '../requests/api'
import { storageAvailable, checkFavoriteExists } from '../helpers'
import store from '../store'

const startfetchig = type => ({ type: FETCHING_[type] }),
  fetchedSeasons = (type, list) => ({ type: FETCED_[type], payload: list }),
  failedFetch = type => ({ type: FAILED_FETCH_[type] }),
  seasonChange = season => ({ type: SEASON_CHANGE, payload: season }),
  addToFavorites = favorites => ({ type: ADD_TO_FAVORITES, payload: favorites }),
  removeFromFavorites = favorites => ({ type: REMOVE_FROM_FAVORITES, payload: favorites }),
  getFromStorage = favorites => ({ type: GET_FROM_STORAGE, payload: favorites }),

  getSeasons = url => dispatch => {
    dispatch(startfetchig('SEASONS'))
    get(url)
      .then(({ MRData: { SeasonTable: { Seasons } } }) => dispatch(fetchedSeasons('SEASONS', Seasons)))
      .catch(ex => {
        dispatch(failedFetch('SEASONS'))
        console.error(ex)
      })
  },

  getDrivers = s => dispatch => {
    dispatch(startfetchig('DRIVERS'))
    dispatch(seasonChange(s))
    get(`${s.season}/driverStandings.json`) // url
      .then(({ MRData: { StandingsTable: { StandingsLists: [{ DriverStandings }] } } }) => dispatch(fetchedSeasons('DRIVERS', DriverStandings)))
      .catch(ex => {
        dispatch(failedFetch('DRIVERS'))
        console.error(ex)
      })
  },

  updateDriversList = driver => dispatch => {
    const { favoriteDrivers } = store.getState(),
      { Driver: { driverId } } = driver,
      driverIndex = checkFavoriteExists(driverId, favoriteDrivers)
    if (driverIndex === -1) {
      favoriteDrivers.push({ ...driver, id: driverId })
      dispatch(addToFavorites(favoriteDrivers))
      if (storageAvailable('localStorage')) {
        window.localStorage.setItem('favoriteDrivers', JSON.stringify(favoriteDrivers))
      }
    } else {
      favoriteDrivers.splice(driverIndex, 1)
      dispatch((removeFromFavorites(favoriteDrivers)))
      if (storageAvailable('localStorage')) {
        window.localStorage.setItem('favoriteDrivers', JSON.stringify(favoriteDrivers))
      }
    }
  }

export {
  getSeasons,
  getDrivers,
  updateDriversList,
  getFromStorage,
}

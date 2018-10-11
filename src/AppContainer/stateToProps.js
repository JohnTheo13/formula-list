import {
  getSeasons,
  getDrivers,
  updateDriversList,
  getFromStorage,
} from '../data/reducers/actions'

const mapStateToProps = state => ({
    seasons: state.seasons,
    drivers: state.drivers,
    activeSeason: state.activeSeason,
    favoriteDrivers: state.favoriteDrivers,
  }),

  mapDispatchToprops = dispatch => ({
    getSeasons: url => dispatch(getSeasons(url)),
    getDrivers: url => dispatch(getDrivers(url)),
    updateDriversList: driver => dispatch(updateDriversList(driver)),
    getFromStorage: favorites => dispatch(getFromStorage(favorites)),
  })

export { mapStateToProps, mapDispatchToprops }

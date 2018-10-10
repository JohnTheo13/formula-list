import { getSeasons, getDrivers, addDriverToStorage } from '../data/reducers/actions'

const mapStateToProps = state => ({
  seasons: state.seasons,
  drivers: state.drivers,
  activeSeason: state.activeSeason
})

const mapDispatchToprops = dispatch => ({
  getSeasons: url => dispatch(getSeasons(url)),
  getDrivers: url => dispatch(getDrivers(url)),
  addDriverToStorage: driver => dispatch(addDriverToStorage(driver))
})

export { mapStateToProps, mapDispatchToprops }

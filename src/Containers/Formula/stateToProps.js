import { getSeasons, getDrivers } from '../../data/reducers/actions'

const mapStateToProps = state => ({
  seasons: state.seasons,
  drivers: state.drivers
})

const mapDispatchToprops = dispatch => ({
  getSeasons: url => dispatch(getSeasons(url)),
  getDrivers: () => dispatch(getDrivers())
})

export { mapStateToProps, mapDispatchToprops }

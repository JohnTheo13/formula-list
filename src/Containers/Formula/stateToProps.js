import { getSeasons } from '../../data/reducers/actions'

const mapStateToProps = state => ({
  seasonList: state.seasonList
})

const mapDispatchToprops = dispatch => ({
  getSeasons: url => dispatch(getSeasons(url))
})

export { mapStateToProps, mapDispatchToprops }

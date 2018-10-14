import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux'
import thunk from 'redux-thunk'
import {
  seasons,
  drivers,
  activeSeason,
  favoriteDrivers,
} from '../reducers'

const reducers = combineReducers({
    seasons,
    drivers,
    activeSeason,
    favoriteDrivers,
  }),

  reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__? window.__REDUX_DEVTOOLS_EXTENSION__() : {}, // eslint-disable-line

  store = createStore(
    reducers,
    compose(
      applyMiddleware(thunk),
      reduxDevTools,
    ),
  )

export default store

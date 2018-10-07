import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { seasons, drivers } from '../reducers';

const reducers = combineReducers({
  seasons,
  drivers
})

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__? window.__REDUX_DEVTOOLS_EXTENSION__() : {};

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    reduxDevTools
  )
)

export default store

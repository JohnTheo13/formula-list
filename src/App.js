import React from 'react'
import { Provider } from 'react-redux'
import store from './data/store'
import Header from './components/Header'
import Formula from './Containers/Formula'

const App = () => (
  <Provider store={store}>
    <div>
      <Header>Project here</Header>
      <Formula />
    </div>
  </Provider>
)

export default App

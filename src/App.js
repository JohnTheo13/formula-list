import React from 'react'
import { Provider } from 'react-redux'
import store from './data/store'
import Header from './components/Header'
import AppContainer from './AppContainer'
import Image from './components/Image'

const App = () => (
  <Provider store={store}>
      <div>
        <Header logo="/images/logo.png">Application</Header>
        <Image />
        <AppContainer />
      </div>
  </Provider>
)

export default App

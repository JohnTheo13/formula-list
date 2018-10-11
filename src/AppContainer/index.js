// @flow
/* eslint-disable no-nested-ternary */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToprops } from './stateToProps'
import ListContainer from '../components/ListContainer'
import { PromtChoose } from './components'
import Tabs from '../components/Tabs'
import { storageAvailable } from '../data/helpers'

class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favourite: false,
    }
  }

  componentDidMount() {
    const { getSeasons, getFromStorage } = this.props
    let favoriteDrivers
    getSeasons('seasons.json?limit=30&offset=59')
    if (storageAvailable('localStorage')) {
      favoriteDrivers = JSON.parse(window.localStorage.getItem('favoriteDrivers'))
      getFromStorage(favoriteDrivers)
    }
  }

  favourite = val => this.setState({ favourite: val }) /* favourites tab is on/off */

  render() {
    const { favourite } = this.state,
      {
        seasons,
        drivers,
        activeSeason,
        updateDriversList,
        getDrivers,
        favoriteDrivers
      } = this.props
    return (
      <div>
        {seasons.fetched && (
          <Tabs
            list={seasons.list}
            getDrivers={getDrivers}
            favourite={this.favourite}
            activeSeason={activeSeason}
          />
        )}
        {!favourite
          ? drivers.fetched
            ? (
              <ListContainer
                list={drivers.driversList}
                title={activeSeason.season}
                updateDriversList={updateDriversList}
                favoriteDrivers={favoriteDrivers}
              />)
            : <PromtChoose />
          : <div>SKATA3</div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToprops)(AppContainer)

// @flow
/* eslint-disable no-nested-ternary */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToprops } from './stateToProps'
import ListContainer from '../components/ListContainer'
import { PromtChoose } from './components'
import Tabs from '../components/Tabs'
import { storageAvailable } from '../data/helpers'
import {
  SeasonShape,
  DriversList,
  SeasonType,
  DriverShape,
} from '../data/types'

type AppType = {
  getSeasons: Function,
  getFromStorage: Function,
  seasons: SeasonShape,
  drivers: DriversList,
  activeSeason: SeasonType,
  updateDriversList: Function,
  getDrivers: Function,
  favoriteDrivers: Array<DriverShape>
}

class AppContainer extends Component<AppType, { favorite: boolean}> {
  constructor(props) {
    super(props)
    this.state = {
      favorite: false,
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

  favorite = val => this.setState({ favorite: val }) /* favorites tab is on/off */

  render() {
    const { favorite } = this.state,
      {
        seasons,
        drivers,
        activeSeason,
        updateDriversList,
        getDrivers,
        favoriteDrivers,
      } = this.props
    return (
      <div>
        {seasons.fetched && (
          <Tabs
            list={seasons.list}
            getDrivers={getDrivers}
            favorite={this.favorite}
            activeSeason={activeSeason}
          />
        )}
        {!favorite
          ? drivers.fetched
            ? (
              <ListContainer
                list={drivers.driversList}
                title={`Drivers for ${activeSeason.season} season`}
                updateDriversList={updateDriversList}
                favoriteDrivers={favoriteDrivers}
              />)
            : <PromtChoose />
          : favoriteDrivers.length
            ? (
              <ListContainer
                list={favoriteDrivers}
                title="Your Favorite Drivers"
                updateDriversList={updateDriversList}
                favoriteDrivers={favoriteDrivers}
              />)
            : <div>SKATA3</div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToprops)(AppContainer)

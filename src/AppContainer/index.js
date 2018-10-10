// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToprops } from './stateToProps'
import ListContainer from '../components/ListContainer'
import { PromtChoose } from './components'
import Tabs from '../components/Tabs'

class AppContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      favourite: false
    }
  }

  favourite = val => { /* favourites tab is on/off */
    this.setState({
      favourite: val
    })
  }

  componentDidMount () {
    this.props.getSeasons('seasons.json?limit=30&offset=59');
  }

  render () {
    const { favourite } = this.state,
          { seasons, drivers, activeSeason } = this.props;
          console.log(drivers);
    return (
      <div>
        {seasons.fetched &&
          <Tabs
            list={seasons.list}
            getDrivers={this.props.getDrivers}
            favourite={this.favourite}
            activeSeason={activeSeason}
          />
        }
        {!favourite
          ? drivers.fetched
            ? <ListContainer list={drivers.driversList} name="Drivers" />
            : <PromtChoose />
          : <div>SKATA3</div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToprops)(AppContainer)

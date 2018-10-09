// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToprops } from './stateToProps'
import ListContainer from '../../components/ListContainer'
import { PromtChoose } from './components'
import Dropdown from '../../components/Dropdown'
import Tabs from '../../components/Tabs'

class Formula extends Component {
  constructor (props) {
    super(props)
    this.state = {
      favourite: false
    }
  }

  componentDidMount () {
    this.props.getSeasons('seasons.json?limit=30&offset=59');
  }

  render () {
    const { favourite } = this.state,
          { seasons, drivers } = this.props;
    return (
      <div>
        {seasons.fetched && <Tabs list={seasons.list}/>}
          {drivers.list
            ? <ListContainer list={drivers.list} name="Drivers" />
            : <PromtChoose />
          }
        {favourite &&
          <div>SKATA3</div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToprops)(Formula)

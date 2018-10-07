// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import FlexContainer from './FlexContainer'
import { mapStateToProps, mapDispatchToprops } from './stateToProps'
import ListContainer from '../../components/ListContainer'
import { PromtChoose } from './components'

class Formula extends Component {
  constructor (props) {
    super(props)
    this.state = { favourite: false }
  }

  componentDidMount () {
    this.props.getSeasons('seasons.json?limit=30&offset=59');
  }

  render () {
    const { favourite } = this.state,
          { seasons, drivers } = this.props;
    return (
      <FlexContainer>
        <div>
          {seasons.list &&
            <ListContainer
              list={seasons.list}
              name="Seasons"
              getDrivers={this.props.getDrivers}
            />
          }
        </div>
        <div>
          {drivers.list
            ? <ListContainer list={drivers.list} name="Drivers" />
            : <PromtChoose>Choose Season</PromtChoose>
          }
        </div>
        {favourite &&
          <div>SKATA3</div>
        }
      </FlexContainer>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToprops)(Formula)

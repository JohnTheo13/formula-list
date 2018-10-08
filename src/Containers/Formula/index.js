// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import FlexContainer from './FlexContainer'
import { mapStateToProps, mapDispatchToprops } from './stateToProps'
import ListContainer from '../../components/ListContainer'
import { PromtChoose } from './components'
import Dropdown from '../../components/Dropdown'

class Formula extends Component {
  constructor (props) {
    super(props)
    this.state = {
      favourite: false,
      isOpen: false
    }
  }

  componentDidMount () {
    this.props.getSeasons('seasons.json?limit=30&offset=59');
  }

  toggleDropdown = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  }

  render () {
    const { favourite, isOpen } = this.state,
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
        <Dropdown isOpen={isOpen}>
          <div onClick={this.toggleDropdown} style={{background: 'red'}}>Seasons</div>
          <Dropdown.Menu>
          {
            ['dddd', 'mmm','dfdfdfdd', 'dsdsdsda', 'skata'].map(e =>
              <Dropdown.Item>{e}</Dropdown.Item>
            )
          }
          </Dropdown.Menu>
        </Dropdown>
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

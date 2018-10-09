// @flow
import React, {Component} from 'react'
import Tab from './Tab'
import TabContainer from './TabContainer'
import { SeasonShape } from '../../data/types'
import Dropdown from '../Dropdown'

type TabType = {
  list: SeasonShape,
  getDrivers: Function
}

class Tabs extends Component<TabType> {
  constructor (props) {
    super (props)
    this.state = {
      isOpen: false,
      activeIndex: 0,
      activeSeason: undefined
    }
  }

  tabClick = index => {
    this.setState({
      activeIndex: index,
      isOpen: index === 1
    })
  }

  seasonClick = season => {
    this.props.getDrivers(season)
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
      activeIndex: 1,
      activeSeason: season
    }));
  }

  toggleDropdown = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
      activeIndex: 1
    }));
  }

  render () {
    const { list } = this.props,
          { isOpen, activeIndex, activeSeason } = this.state
    return (
      <TabContainer>
        <Tab index={1} activeIndex={activeIndex}>
          <Dropdown isOpen={isOpen}>
            <div onClick={this.toggleDropdown} style={{ height: '100%'}}>
              {activeSeason ? activeSeason :'SEASONS'}
            </div>
            <Dropdown.Menu>
            {
              list.map(e =>
                <Dropdown.Item key={e.season} onClick={() => this.seasonClick(e.season)}>{e.season}</Dropdown.Item>
              )
            }
            </Dropdown.Menu>
          </Dropdown>
        </Tab>
        <Tab index={2} onClick={() =>this.tabClick(2)} activeIndex={activeIndex}>FAVOURITES</Tab>
      </TabContainer>
    )
  }
}

export default Tabs

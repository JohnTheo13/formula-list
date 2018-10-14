// @flow
import React, { Component } from 'react'
import Tab from './Tab'
import TabContainer from './TabContainer'
import { SeasonShape, SeasonType } from '../../data/types'
import Dropdown from '../Dropdown'

type TabType = {
  list: SeasonShape,
  getDrivers: Function,
  favorite: Function,
  activeSeason: SeasonType,
}

class Tabs extends Component<TabType, { isOpe: boolean, activeIndex: number}> {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      activeIndex: 0,
    }
  }

  tabClick = index => {
    const { favorite } = this.props
    this.setState({
      activeIndex: index,
      isOpen: index === 1,
    })
    favorite(index === 2)
  }

  seasonClick = s => {
    const { getDrivers } = this.props
    getDrivers(s)
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
      activeIndex: 1,
    }))
  }

  toggleDropdown = () => {
    const { favorite } = this.props
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
      activeIndex: 1,
    }))
    favorite(false)
  }

  render() {
    const { list, activeSeason } = this.props,
      { isOpen, activeIndex } = this.state
    return (
      <TabContainer>
        <Tab index={1} activeIndex={activeIndex}>
          <Dropdown isOpen={isOpen}>
            <div onClick={this.toggleDropdown /* eslint-disable-line*/} style={{ height: '100%'}}>
              {activeSeason.season}
            </div>
            <Dropdown.Menu>
              {
                list.map(s => (
                  <Dropdown.Item key={s.season} onClick={() => this.seasonClick(s)}>
                    {s.season}
                  </Dropdown.Item>))
              }
            </Dropdown.Menu>
          </Dropdown>
        </Tab>
        <Tab index={2} onClick={() => this.tabClick(2)} activeIndex={activeIndex}>FAVORITES</Tab>
      </TabContainer>
    )
  }
}

export default Tabs

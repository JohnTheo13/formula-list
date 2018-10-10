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
      activeIndex: 0
    }
  }

  tabClick = index => {
    this.setState({
      activeIndex: index,
      isOpen: index === 1
    })
    this.props.favourite(index === 2)
  }

  seasonClick = s => {
    this.props.getDrivers(s)
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
      activeIndex: 1
    }));
  }

  toggleDropdown = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
      activeIndex: 1
    }));
    this.props.favourite(false)
  }

  render () {
    const { list, activeSeason } = this.props,
          { isOpen, activeIndex } = this.state
    return (
      <TabContainer>
        <Tab index={1} activeIndex={activeIndex}>
          <Dropdown isOpen={isOpen}>
            <div onClick={this.toggleDropdown} style={{ height: '100%'}}>
              {activeSeason.season}
            </div>
            <Dropdown.Menu>
            {
              list.map(s =>
                <Dropdown.Item key={s.season} onClick={() => this.seasonClick(s)}>{s.season}</Dropdown.Item>
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

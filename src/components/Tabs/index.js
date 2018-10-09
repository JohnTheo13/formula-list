// @flow
import React, {Component} from 'react'
import Tab from './Tab'
import TabContainer from './TabContainer'
import { SeasonShape } from '../../data/types'
import Dropdown from '../Dropdown'

type TabType = {
  list: SeasonShape
}

class Tabs extends Component<TabType> {
  constructor (props) {
    super (props)
    this.state = {
      isOpen: false
    }
  }

  toggleDropdown = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  }

  render () {
    const { list } = this.props,
          { isOpen } = this.state
    return (
      <TabContainer>
        <Tab>
          <Dropdown isOpen={isOpen}>
            <div onClick={this.toggleDropdown} style={{background: 'red'}}>Seasons</div>
            <Dropdown.Menu>
            {
              list.map(e =>
                <Dropdown.Item key={e.season}>{e.season}</Dropdown.Item>
              )
            }
            </Dropdown.Menu>
          </Dropdown>
        </Tab>
        <Tab>FAVOURITES</Tab>
      </TabContainer>
    )
  }
}

export default Tabs

// @flow
import React, { Component } from 'react'
import { StyledList, ListItem, ListHeader } from './components'
import { DriversList } from '../../data/types'
import CollapsingContainer from '../CollapsingContainer'

class ListContainer extends Component<DriversList> {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
    }
  }

  toggle = () => this.setState(({ collapsed }) => ({
    collapsed: !collapsed,
  }))

  render() {
    const {
        list,
        title,
        updateDriversList,
        favoriteDrivers,
      } = this.props,
      { collapsed } = this.state,
      { length } = list

    return (
      <StyledList>
        <div>{title}</div>
        <ListHeader />
        {
          list.slice(0, 8).map(e => (
            <ListItem
              key={e.Driver.code}
              driver={e}
              updateDriversList={updateDriversList}
              favoriteDrivers={favoriteDrivers}
              listName={title}
            />))
        }
        <CollapsingContainer collapsed={collapsed}>
          {
            list.slice(8, length).map(e => (
              <ListItem
                key={e.Driver.code}
                driver={e}
                updateDriversList={updateDriversList}
                favoriteDrivers={favoriteDrivers}
                listName={title}
              />))
          }
        </CollapsingContainer>
        <div onClick={this.toggle /* eslint-disable-line */}>
          {collapsed
            ? <i className="material-icons">keyboard_arrow_down</i>
            : <i className="material-icons">keyboard_arrow_up</i>
          }
        </div>
      </StyledList>
    )
  }
}

export default ListContainer

// @flow
import React, { Component } from 'react'
import { StyledList, ListItem, ListHeader } from './components'
import { DriversList } from '../../data/types'

class ListContainer extends Component<DriversList> {

  render() {
    const { list, title, updateDriversList, favoriteDrivers, listName } = this.props

    return (
      <StyledList>
        <div>Drivers for {title} season</div>
        <ListHeader />
        {
          list.map(e => (
            <ListItem
              key={e.Driver.code}
              driver={e}
              updateDriversList={updateDriversList}
              favoriteDrivers={favoriteDrivers}
              listName={listName}
            />))
        }
      </StyledList>
    )
  }
}

export default ListContainer

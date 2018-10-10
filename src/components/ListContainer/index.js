// @flow
import React, { Component } from 'react'
import { StyledList, ListItem, ListHeader } from './components'
import { DriversList } from '../../data/types'

class ListContainer extends Component<DriversList> {

  render () {
    const { list, title, addDriverToStorage } = this.props
    console.log(list);
    return (
      <StyledList>
        <div>Drivers for {title} season</div>
        <ListHeader />
        {
          list.map(e => <ListItem key={e.Driver.code} driver={e} addDriverToStorage={addDriverToStorage} />)
        }
      </StyledList>
    )
  }
}

export default ListContainer

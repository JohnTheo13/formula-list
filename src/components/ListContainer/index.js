// @flow
import React, { Component } from 'react'
import { StyledList, ListItem } from './components'
import { DriversList } from '../../data/types'

class ListContainer extends Component<DriversList> {

  render () {
    const { list, title } = this.props
    console.log(list);
    return (
      <StyledList>
        <div>Drivers for {title} season</div>
        {
          list.map(e => <ListItem key={e.Driver.code} {...e} />)
        }
      </StyledList>
    )
  }
}

export default ListContainer

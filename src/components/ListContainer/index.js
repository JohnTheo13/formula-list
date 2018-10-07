// @flow
import React, { Component } from 'react'
import { StyledList, ListItem } from './components'

class ListContainer extends Component {

  get = () => this.props.getDrivers();

  render () {
    const { list, name } = this.props
    return (
      <StyledList>
        <button onClick={this.get}>click</button>
        <h3>{name}</h3>
        {
          list.map((e, index) => <ListItem name={e.season}  chosen={index === 0}/>)
        }
      </StyledList>
    )
  }
}

export default ListContainer

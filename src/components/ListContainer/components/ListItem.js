import React, { Component } from 'react'
import StyledItem from './StyledItem'
import { DriverShape } from '../../../data/types'

class ListItem extends Component<DriverShape> {

  render () {
    const {
      positionText,
      points,
      wins,
      Driver: { url, givenName, familyName },
      Constructors: [{ name }]
    } = this.props;
          console.log(name);
    return (
      <StyledItem>
        skata
      </StyledItem>
    )
  }
}

export default ListItem

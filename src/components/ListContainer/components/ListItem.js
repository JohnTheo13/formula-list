// @flow
import React, { Component } from 'react'
import StyledItem from './StyledItem'
import { DriverShape } from '../../../data/types'
import NameSection from './NameSection'
import Favourite from './Favorite'

type ItemType = {
  driver: DriverShape
}

class ListItem extends Component<ItemType> {

  favorite = () => {
    const { driver, addDriverToStorage } = this.props
      addDriverToStorage(driver)
  }

  render () {
    const {
      driver: {
      positionText,
      points,
      wins,
      Driver: { url, givenName, familyName, driverId },
      Constructors: [{ name }]},
      driver
    } = this.props;
    console.log(driver);
    return (
      <StyledItem>
        <NameSection
          constructorName={name}
          positionText={positionText}
          fullname={{ givenName, familyName}}
        />
        <div>{points}</div>
        <div>{wins}</div>
        <div>
          <a href={url}>wiki</a>
          <Favourite onClick={this.favorite} />
        </div>
      </StyledItem>
    )
  }
}

export default ListItem

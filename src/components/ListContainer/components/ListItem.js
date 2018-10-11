// @flow
import React, { Component } from 'react'
import StyledItem from './StyledItem'
import { DriverShape } from '../../../data/types'
import NameSection from './NameSection'
import Favourite from './Favorite'
import { checkFavoriteExists } from  '../../../data/helpers'

type ItemType = {
  driver: DriverShape
}

class ListItem extends Component<ItemType> {
  constructor(props) {
    super(props)
    const { driver: { Driver: { driverId } }, favoriteDrivers } = props,
      favorited = checkFavoriteExists(driverId, favoriteDrivers) !== -1
    this.state = {
      favorited
    }
  }

  componentDidUpdate() {

  }

  favoriteUpdate = () => {
    const { driver, updateDriversList } = this.props
    updateDriversList(driver)
  }

  render() {
    const {
        driver: {
          positionText,
          points,
          wins,
          Driver: {
            url, givenName, familyName, driverId
          },
          Constructors: [{ name }]
        }
      } = this.props,
      { favorited } = this.state

    return (
      <StyledItem>
        <NameSection
          constructorName={name}
          positionText={positionText}
          fullname={{ givenName, familyName }}
        />
        <div>{points}</div>
        <div>{wins}</div>
        <div>
          <a href={url}>wiki</a>
          <Favourite onClick={this.favoriteUpdate} favorited={favorited} />
        </div>
      </StyledItem>
    )
  }
}

export default ListItem

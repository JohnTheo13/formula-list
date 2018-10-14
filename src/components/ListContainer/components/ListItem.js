// @flow
import React, { Component } from 'react'
import StyledItem from './StyledItem'
import { DriverShape } from '../../../data/types'
import NameSection from './NameSection'
import Favourite from './Favorite'
import { checkFavoriteExists } from '../../../data/helpers'

type ItemType = {
  driver: DriverShape,
  favoriteDrivers: Array<DriverShape>,
  updateDriversList: Function,
  listName: string,
}

class ListItem extends Component<ItemType, { favorited: boolean }> {
  constructor(props) {
    super(props)
    const { driver: { Driver: { driverId } }, favoriteDrivers } = props,
      favorited = checkFavoriteExists(driverId, favoriteDrivers) !== -1
    this.state = {
      favorited,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { favorited } = this.state,
      { listName } = this.props

    if (nextState.favorited !== favorited || nextProps.listName !== listName) {
      return true
    }
    return false
  }

  favoriteUpdate = () => {
    const { driver, updateDriversList } = this.props
    updateDriversList(driver)
    this.setState(({ favorited }) => ({
      favorited: !favorited,
    }))
  }

  render() {
    const {
        driver: {
          positionText,
          points,
          wins,
          Driver: {
            url, givenName, familyName,
          },
          Constructors: [{ name }],
        },
        listName,
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
          <a href={url} target="_blank rel='noreferrer noopener'">wiki</a>
          {listName === 'Your Favorite Drivers'
            ? <i className="material-icons" onClick={this.favoriteUpdate}>remove_circle_outline</i>  // eslint-disable-line
            : <Favourite onClick={this.favoriteUpdate} favorited={favorited} />
          }
        </div>
      </StyledItem>
    )
  }
}

export default ListItem

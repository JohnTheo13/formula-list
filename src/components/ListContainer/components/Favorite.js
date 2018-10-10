// @flow
import styled from 'styled-components'
import React from 'react'

type FavoriteType = {
  onClick: Function,
  favorite?: boolean
}

const FavoriteIcon = styled.i`
  color: ${props => props.favorite && 'yellow'};
`
const Favorite = (props: FavoriteType) => (
  <FavoriteIcon className="material-icons" onClick={props.onClick} favorite={props.favorite}>favorite</FavoriteIcon>
)

export default Favorite

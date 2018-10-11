// @flow
import styled from 'styled-components'
import React from 'react'

type FavoriteType = {
  onClick: Function,
  favorite: boolean
}

const FavoriteIcon = styled.i`
  color: ${props => props.favorited && 'red'};
`,

  Favorite = (({ onClick, favorited }): FavoriteType) => (
    <FavoriteIcon className="material-icons" onClick={onClick} favorited={favorited}>favorite</FavoriteIcon>
  )

export default Favorite

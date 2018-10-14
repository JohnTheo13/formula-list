// @flow
import styled from 'styled-components'
import React from 'react'

type FavoriteType = {
  onClick: Function,
  favorited: boolean
}

const FavoriteIcon = styled.i`
  color: ${({ favorited }) => (favorited ? '#ee322f' : '#cccbcb')};
  margin-top: 2px;
`,

  Favorite = (({ onClick, favorited }): FavoriteType) => (
    <FavoriteIcon className="material-icons" onClick={onClick} favorited={favorited}>favorite</FavoriteIcon>
  )

export default Favorite

import React from 'react'
import StyledItem from './StyledItem'

const ListItem = ({ name, chosen}) => (
  <StyledItem chosen={chosen}>
    {name}
  </StyledItem>
)

export default ListItem

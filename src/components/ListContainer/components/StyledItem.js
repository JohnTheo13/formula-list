import styled from 'styled-components'

const StyledItem = styled.div`
  background-color: ${({chosen}) => chosen ? 'red' : 'transparent'}
  &:hover {
    background-color: blue;
  }
`

export default StyledItem

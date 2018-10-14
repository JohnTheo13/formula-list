import styled from 'styled-components'

const StyledList = styled.div`
  & > div {
    &:nth-child(2) { /* Header */
      background-color: #cccbcb;
    }
    &:first-child {
      height: 40px;
      padding: 10px
    }
    &:last-child {
      text-align: center;
      cursor: pointer;
      & > i {
        color: #000000;
      }
    }
  }
`

export default StyledList

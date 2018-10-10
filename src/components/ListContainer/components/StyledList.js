import styled from 'styled-components'

const StyledList = styled.div`
  & > div {
    line-height: 1.2;
    border-bottom: 1px solid #cccbcb;
    padding-left: 8px;
    cursor: pointer;
    &:nth-child(2) { /* Header */
      background-color: #cccbcb;
    }
    &:first-child {
      height: 40px;
      padding: 10px
    }
  }
`

export default StyledList

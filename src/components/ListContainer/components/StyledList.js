import styled from 'styled-components'

const StyledList = styled.div`
  & > div {
    height: 18px;
    line-height: 1.2;
    border-bottom: 1px solid #cccbcb;
    padding-left: 4px;
    cursor: pointer;
    &:nth-child(2) {
      background-color: #cccbcb;
    }
  }
`

export default StyledList

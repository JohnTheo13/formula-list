import styled from 'styled-components'

const StyledList = styled.div`
  & > div {
    height: 18px;
    line-height: 1.2;
    border-bottom: 1px solid;;
    padding-left: 4px;
    cursor: pointer;
  }
  & > h3 {
    background-color: red;
    height: 24px;
    line-height: 1.5;
    padding: 0;
    text-align: center;
    border-top: 4px solid;
    border-bottom: 4px solid;
  }
`

export default StyledList

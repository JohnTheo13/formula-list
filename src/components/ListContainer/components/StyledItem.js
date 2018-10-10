import styled from 'styled-components'

const StyledItem = styled.div`
  display: flex;
  height: fit-content;
  justify-content: space-between;
  padding: 8px 16px;
  &:hover {
    background-color: #d2d2d2;
  }
  & > div {
    text-align: left;
    width: 100%;
    & > a {
      float: left;
      margin-right: 8px;
      margin-top: 2px;
    }
  }
`

export default StyledItem

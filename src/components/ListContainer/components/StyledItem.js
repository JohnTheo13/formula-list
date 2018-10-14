import styled from 'styled-components'

const StyledItem = styled.div`
  display: flex;
  height: fit-content;
  justify-content: space-between;
  padding: 8px 16px;
  line-height: 1.2;
  border-bottom: 1px solid #cccbcb;
  padding-left: 8px;
  &:hover {
    background-color: #d2d2d2;
  }
  & > div {
    text-align: left;
    & > a {
      float: left;
      margin-right: 12px;
      margin-top: 2px;
    }
    & > i {
      cursor: pointer;
      &:hover {
        color: #ee322f;
      }
    }
  }
`

export default StyledItem

import styled from 'styled-components'

const TabContainer = styled.div`
  display: flex;
  background-color: grey;
  justify-content: space-around;
  height: 30px;
  text-align: center;
  & > div {
    &:not(:last-child) {
      border-right: 1px solid black;
    }
  }
`
export default TabContainer

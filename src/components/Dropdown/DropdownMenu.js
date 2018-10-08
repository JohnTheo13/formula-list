import styled from 'styled-components'

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  display: none;
  float: left;
  padding: 4 0;
  margin: 2 0 0;
  text-align: left;
  list-style: none;
  background-color: green;
  background-clip: padding-box;
  border:epx solid grey;
`

DropdownMenu.defaultProps = {}

export default DropdownMenu

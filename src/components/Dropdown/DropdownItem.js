import styled from 'styled-components'

const DropdownItem = styled.div`
  display: block;
  width: 100%;
  padding: 8px;
  clear: both;
  font-weight: 300;
  color: red;
  text-align: inherit;
  white-space: nowrap;
  background: none;
  border: 0;
`

DropdownItem.defaultProps = {};

export default DropdownItem;

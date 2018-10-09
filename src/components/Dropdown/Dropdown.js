import styled, { css } from 'styled-components';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';

const Dropdown = styled.div`
  position: relative;
  height: 100%;
  ${props =>
    props.isOpen &&
    css`
      ${DropdownMenu} {
        display: block;
        ${props.align === 'right' ? 'right: 0;' : 'left: 0;'};
      }
    `};
`;

Dropdown.Item = DropdownItem;
Dropdown.Menu = DropdownMenu;

Dropdown.defaultProps = {
  align: 'left'
};

export default Dropdown;

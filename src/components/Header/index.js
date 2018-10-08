import styled from 'styled-components'

const Header = styled.header`
  position: relative;
  background-color: ${({theme: { headerBack }}) => headerBack};
  color: ${({theme: { headerText }}) => headerText};
  text-align: center;
  font-size: 32px;
  line-height: 1.5;
  height: 60px;
  width: 100%;
  box-shadow: 0px 2px #d2d2d2;
`

Header.defaultProps = {
  theme: {
    headerBack: '#000000',
    headerText: '#ffffff'
  }
}

export default Header

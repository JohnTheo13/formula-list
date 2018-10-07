import styled from 'styled-components'

const Header = styled.header`
  position: relative;
  background-color: ${({theme: { headerBack }}) => headerBack};
  color: ${({theme: { headerText }}) => headerText};
  text-align: center;
  font-size: 32px;
  line-height: 1.5;
  box-shadow: 0px 2px #d2d2d2;
  margin-bottom: 34px;
`

Header.defaultProps = {
  theme: {
    headerBack: '#fc7e00',
    headerText: '#ffffff'
  }
}

export default Header

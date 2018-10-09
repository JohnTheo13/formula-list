// @flow
import React, { type Node } from 'react'
import styled from 'styled-components'

type HeaderTypes = {
  children: Node,
  logo: string
}

const StyledHeader = styled.header`
  position: relative;
  background-image: linear-gradient(to bottom, #000000 0%, #000000 50%, #ffffff 100%);
  color: ${({theme: { headerText }}) => headerText};
  height: 65px;
  width: 100%;
  & > img {
    float: left;
    height: 80%;
    margin-left: 20%;
    margin-top: 8px;
  }
  & > span {
    margin-left: 20px;
    font-size: 32px;
  }
`

StyledHeader.defaultProps = {
  theme: {
    headerBack: '#000000',
    headerText: '#ffffff'
  }
}

const Header = (props: HeaderTypes) => (
  <StyledHeader>
    <img alt="formula-logo" src={props.logo} />
    <span>{props.children}</span>
  </StyledHeader>
)

export default Header

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
  color: ${({ theme: { headerText } }) => headerText};
  height: 65px;
  width: 100%;
  font-size: 32px;
  & > img {
    float: left;
    height: 80%;
    margin-left: 20%;
    margin-top: 8px;
  }
  & > span {
    margin-left: 20px;
  }
  @media (max-width: 650px) {
    font-size: 24px;
  }
`,

  Header = ({ children, logo }: { ...HeaderTypes }) => (
    <StyledHeader>
      <img alt="formula-logo" src={logo} />
      <span>{children}</span>
    </StyledHeader>
  )


StyledHeader.defaultProps = {
  theme: {
    headerBack: '#000000',
    headerText: '#ffffff',
  },
}

export default Header

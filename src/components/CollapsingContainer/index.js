// @flow
import React from 'react'
import type { Node } from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  overflow: hidden;
  height: ${({ collapsed }) => (collapsed ? '0px' : 'fit-content')};
  display: ${({ collapsed }) => (collapsed && 'none')};
  transition: height 13.15s cubic-bezier(0.4, 0, 1, 1);
`,

  ref = React.createRef(),

  CollapsingContainer = ({
    children,
    collapsed,
  }: {
      children: Node,
      collapsed?: boolean,
  }) => (
    <StyledContainer collapsed={collapsed} ref={ref}>
      {children}
    </StyledContainer>
  )

CollapsingContainer.defaultProps = { collapsed: true }

export default CollapsingContainer

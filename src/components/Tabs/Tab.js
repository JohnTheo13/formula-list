// @ flow
import styled, { css } from 'styled-components'

type TabType = {
  activeIndex: number,
  index: number
}

const Tab = styled.div`
  width: 100%;
  ${(props: TabType) => props.activeIndex === props.index &&
    css`
      border-bottom: 1px solid #000000;
      background-color: grey;
    `
  };
  line-height: 1.8;
  cursor: pointer;
`

export default Tab

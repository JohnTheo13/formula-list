// @ flow
import styled, { css } from 'styled-components'

type TabType = {
  activeIndex: number,
  index: number
}

const Tab = styled.div`
  width: 100%;
  line-height: 1.8;
  cursor: pointer;
  ${(props: TabType) => props.activeIndex === props.index && css`
      border-bottom: 1px solid #000000;
      background-color: grey;
    `
};
  &:hover {
    background-color: #808080b8;
`

export default Tab

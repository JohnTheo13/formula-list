// @ flow
import styled from 'styled-components'

type TabType = {
  activeIndex: number,
  index: number
}

const Tab = styled.div`
  width: 100%
  border-bottom: ${(props: TabType) => props.activeIndex === props.index && '1px solid #000000'};
  line-height: 1.8;
  cursor: pointer;
`

export default Tab

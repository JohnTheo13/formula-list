// @ flow
import styled from 'styled-components'

const Tab = styled.div`
  with: 100%
  border-bottom: ${({active}: boolean) => active && '1px solid #000000'};
`

export default Tab
